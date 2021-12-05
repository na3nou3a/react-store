import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer, ModalContainer } from './StyledComponnents';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) return null;
          return (
            <ModalContainer>
              <div className='container'>
                <div className='row'>
                  <div
                    id='modal'
                    className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
                  >
                    <h5>item added to cart</h5>
                    <img src={img} alt='product' className='img-fluid' />
                    <h5>{title}</h5>
                    <h5 className='text-muted'>price : $ {price}</h5>
                    <Link to='/products'>
                      <ButtonContainer onClick={() => closeModal()}>
                        store
                      </ButtonContainer>
                    </Link>
                    <Link to='/cart'>
                      <ButtonContainer onClick={() => closeModal()} yellow>
                        my cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
