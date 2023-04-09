import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);
  const [isFavorite, setIsFavorite] = useState([]);

  const handleBoxClick = (index) => {
    setSelectedBox(index === selectedBox ? null : index);
  };

  const toggleFavorite = (index) => {
    const favorites = [...isFavorite];
    favorites[index] = !favorites[index];
    setIsFavorite(favorites);
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=20')
      .then((response) => {
        const jsonData = response.data;
        setData(jsonData);
        setIsFavorite(new Array(jsonData.length).fill(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="container">
      {data.map((values, index) => (
        <div className="box" key={index}>
          <div onClick={() => handleBoxClick(index)}>
            <h5>{values.title}</h5>
            <div ><img className='container-image' src={values.image} alt={values.title} /></div>
            <p>
              <b>Price: {values.price} $</b>
            </p>
            {selectedBox === index && (
              <div className="details">
                <p><b>Description: </b>{values.description}</p>
              </div>
            )}
          </div>
          <div className='btn'>
            <button className="button" onClick={() => addToCart(values)}>Add to Cart</button>
             <div><Link to={`/product/${values.id}`}> <button className="button show ">Show more</button></Link></div>
            <button className={`button fav ${isFavorite[index] ? 'active' : ''}`} onClick={() => toggleFavorite(index)}>{isFavorite[index] ? 'Remove' : 'Favorite'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
