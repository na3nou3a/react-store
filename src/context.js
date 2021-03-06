import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    return tempProducts;
  };

  state = {
    products: this.setProducts(),
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false,
      };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => this.addTotal()
    );
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find((item) => item.id === id);
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotal()
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find((item) => item.id === id);
    product.count = product.count - 1;
    if (product.count === 0) {
      return this.removeItem(id);
    }
    product.total = product.price * product.count;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotal()
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          products: [...tempProducts],
          cart: [...tempCart],
        };
      },
      () => this.addTotal()
    );
  };

  clearCart = () => {
    this.setState(() => {
      return {
        cart: [],
        products: this.setProducts(),
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };
    });
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

// componentDidMount() {
//   this.setProducts();
// }

// setProducts = ()=>{
//   let tempProducts = [];
//   storeProducts.forEach(item=>{
//     const singleItem = {...item};
//     tempProducts = [...tempProducts, singleItem];
//   });
//   this.setState(()=>{
//     return {products: tempProducts}
//   });
// }
