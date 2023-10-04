import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css'; 

const Item = ({ name, image, price, origen,  id }) => {
  return (
    <div className="item-container">
      <h1>{name}</h1>
      <img className="item-image" src={image} alt="" />
      <h3>{origen}</h3>
      <h4>{price}</h4>
      <Link className="item-link" to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
