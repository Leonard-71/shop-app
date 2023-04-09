import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Shop from './components/Shop';
import Products from './components/pages/Products';
import Product from './components/product/Product';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
