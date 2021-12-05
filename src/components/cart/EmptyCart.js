import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../StyledComponnents';

const EmptyCart = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title'>
          <h1 className='mb-5'>your cart is currently empty</h1>
          <Link to='/products'>
            <ButtonContainer>return to store</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
