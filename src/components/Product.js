import React, { Component } from 'react';
import { ProductWrapper } from './StyledComponnents';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { PropTypes } from 'prop-types';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <ProductConsumer>
            {(value) => {
              const { handleDetail, addToCart, openModal } = value;
              return (
                <div
                  className='img-container p-5'
                  onClick={() => handleDetail(id)}
                >
                  <Link to='/details'>
                    <img src={img} alt='product' className='card-img-top' />
                  </Link>
                  <button
                    className='cart-btn'
                    disabled={inCart ? true : false}
                    onClick={() => {
                      addToCart(id);
                      openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className='text-capitalize mb-0' disabled>
                        in cart
                      </p>
                    ) : (
                      <i className='fas fa-cart-plus' />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/* card footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='me-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
