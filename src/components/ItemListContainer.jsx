import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from './productos.json';

const ItemListContainer = () => {
  const { origenId } = useParams(); 
  const [items, setItems] = useState([]); 
  const [load, setLoad] = useState(true); 

  const getProducts = (origenId) => { 
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = origenId
          ? productosJson.filter((prod) => prod.origen === origenId) 
          : productosJson;
        resolve(filteredProducts);
      }, 1000);
    });
  };

  useEffect(() => {
    setLoad(true);
    getProducts(origenId) 
      .then((prod) => {
        setItems(prod);
        setLoad(false);
      })
      .catch((err) => console.warn(err));
  }, [origenId]); 

  return (
    <>
      {load ? (
        <div>Loading...</div>
      ) : (
        <div className="item-list">
          {items.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width={150} />
              <p>{product.origen}</p>
              <p>Precio: {product.precio}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
