import React from 'react';
import Item from './Item';
import '../App.css'; 

const ItemList = ({ data }) => {
  return (
    <div className="item-list-container">
      {data.map((product) => (
        <Item
          title={product.title}
          key={product.id}
          id={product.id}
          image={product.image}
          precio={product.precio}
          origen={product.origen}
        />
      ))}
    </div>
  );
};

export default ItemList;
