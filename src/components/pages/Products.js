import Card from '../card/Card';
import Cart from '../cart/Cart'
import React, { useState } from 'react';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  return (
    <div>
      <Cart cartItems={cartItems} />
      <Card addToCart={addToCart} />
    </div>
  );
};

export default Products
