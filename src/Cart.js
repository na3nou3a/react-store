import React from 'react';
import Title from './components/Title';
import CartColumns from './components/cart/CartColumns';
import EmptyCart from './components/cart/EmptyCart';
import CartList from './components/cart/CartList';
import CartTotals from './components/cart/CartTotals';
import { ProductConsumer } from './context';

const Cart = () => {
  return (
    <main>
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name='your' title='cart' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            }
            return <EmptyCart />;
          }}
        </ProductConsumer>
      </section>
    </main>
  );
};

export default Cart;
