import Card from '../card/Card';
import Cart from './Cart';
import React, { useState } from 'react';
const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  return (
    <div>
      
      <Card addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Products
