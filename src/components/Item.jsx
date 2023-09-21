import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ title, image, precio, id }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} width={130} alt="" />
      <h3>{title}</h3>
      <h4>{precio}</h4>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
