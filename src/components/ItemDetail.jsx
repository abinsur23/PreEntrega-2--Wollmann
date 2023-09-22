import React from 'react';

const ItemDetail = ({ item }) => {
  if (!item) {
    // Si item es undefined, muestra un mensaje de carga o maneja el caso en consecuencia
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} width={250} alt="" />
      <h3>Origen: {item.origen}</h3>
      <h4>Precio: {item.precio}</h4>
      <h4>Descripción:</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
