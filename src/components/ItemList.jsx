import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((product) => (
        <Item
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
