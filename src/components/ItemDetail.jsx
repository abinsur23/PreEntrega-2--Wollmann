import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <p>Cargando...</p>;
  }
    
  
  const handleOnAdd = (count) => {
      console.log("se agrego al carrito: ",count)
  };


  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} width={250} alt="" />
      <h3>Origen: {item.origen}</h3>
      <h4>Descripción:</h4>
      <h4>Precio: {item.price}</h4>
      <p>{item.description}</p>
      <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
