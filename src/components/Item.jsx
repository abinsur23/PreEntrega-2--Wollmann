import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css'; 

const Item = ({ title, image, precio, id }) => {
  return (
    <div className="item-container">
      <h1>{title}</h1>
      <img className="item-image" src={image} alt="" />
      <h3>{title}</h3>
      <h4>{precio}</h4>
      <Link className="item-link" to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
