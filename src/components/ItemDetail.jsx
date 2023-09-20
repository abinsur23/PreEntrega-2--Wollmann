import React from 'react';



const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <h3>Origen: {item.origen}</h3>
      <h4>Descripción:</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
