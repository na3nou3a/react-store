import React from 'react';
import Title from './components/Title';
import { ButtonContainer } from './components/StyledComponnents';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
            <Title name='best' title='store' />
            <h2>see our products</h2>
            <Link to='/products'>
              <ButtonContainer>store</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
