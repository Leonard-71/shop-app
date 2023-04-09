import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const jsonData = await response.json();
        setProduct(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const addToCartHandler = () => {
    addToCart(product);
  };

  const Loading = () => {
    return <p>Loading......</p>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img  className="imgProd " src={product.image} alt={product.title} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: &nbsp;{product.rating && product.rating.rate} 
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4"> Price: $ {product.price} </h3>
          <p className="lead">{product.description}</p>
          <button><Link to="/products">Go back to products</Link></button>
          <button onClick={addToCartHandler}>Add to cart</button>
          
        </div>
      </>
    );
  };

  return (
    <div className="container">
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <Loading />
      ) : (
        <div className="row">
          <ShowProduct />
        </div>
      )}
    </div>
  );
};

export default Product;
