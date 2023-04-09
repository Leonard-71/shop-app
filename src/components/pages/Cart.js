import React from "react";
import './Cart.css';

function Cart(props) {
  
  const { cartItems, removeFromCart } = props;

  // calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    removeFromCart(updatedCartItems);
  };

  return (
    <div className="row">
      <div className="col-75"></div>
      <div className="col-25">
        <div className="cont-cart">
          <h4>
            Cart{" "}
            <span className="price" >
              <i className="fa fa-shopping-cart"></i>{" "}
              <b>{cartItems.length}</b>
            </span>
          </h4>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                <a href={`#${item.id}`}>{item.title}</a>{" "}
                <span className="price">${item.price}</span>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </p>
              <hr />
            </div>
          ))}
          <p>
            Total{" "}
            <span className="price" >
              <b>${totalPrice.toFixed(3)}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
