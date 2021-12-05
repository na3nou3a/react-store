import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer, NavWrapper } from './StyledComponnents';
import logo from '../logo.svg';
import { ProductConsumer } from '../context';

const Navbar = () => {
  return (
    <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
      Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk
      */}

      <Link to='/'>
        <img src={logo} alt='home' className='navbar-brand' />
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ms-5'>
          <Link to='/products' className='nav-link'>
            Products
          </Link>
        </li>
      </ul>
      <ProductConsumer>
        {(value) => {
          const count = value.cart.length;
          return (
            <Link to='/cart' className='ms-auto'>
              <ButtonContainer>
                <span className='me-2'>
                  <i className='fas fa-cart-plus' />
                </span>
                My Cart <span className='span-count'>{count}</span>
              </ButtonContainer>
            </Link>
          );
        }}
      </ProductConsumer>
    </NavWrapper>
  );
};

export default Navbar;
