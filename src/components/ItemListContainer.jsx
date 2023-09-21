import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from './productos.json';
import ItemList from './ItemList';

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
      .then(prod => {
        setItems(prod);
        setLoad(false);
      })
  }, [origenId])


  return (
    <ItemList data={items} />
  );
};
  
export default ItemListContainer;

