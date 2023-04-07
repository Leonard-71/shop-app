import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Shop from './components/pages/Shop'
import Footer from './components/pages/Footer';

function App() {
  return (
    <div>
      <Navbar /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
