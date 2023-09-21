import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  return (
    <div>
        <div>
      {data.map((product) => (
            <Item
                item={product}
                title={product.title}
                key={product.id}
                id={product.id}
                image={product.image}
                precio={product.precio}
                origen={product.origen}
            />
            ))}
        </div>
    </div>
  );
};

export default ItemList;
