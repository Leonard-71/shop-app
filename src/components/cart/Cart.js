import React from "react";
import './Cart.css';
function Cart(props) {
  
  const { cartItems } = props;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

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
                <span className="price">${item.price}</span><br/>
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
