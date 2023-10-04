import React from 'react';
import Item from './Item';
import '../App.css'; 

const ItemList = ({ data }) => {
  return (
    <div className="item-list-container">
      {data.map((product) => (
        <Item
          name={product.name}
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
          origen={product.origen}
        />
      ))}
    </div>
  );
};

export default ItemList;
