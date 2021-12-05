import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import App from './App';
import About from './About';
import Cart from './Cart';
import Details from './Details';
import Home from './Home';
import Modal from './components/Modal';

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Modal />
      <Footer />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);
