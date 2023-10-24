import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../main";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { origenId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    let q;

    if (origenId) {
      q = query(productosRef, where("origen", "==", origenId));
    } else {
      q = productosRef;
    }

    getDocs(q)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      });
  }, [origenId]);

  return (
    <ItemList data={items} />
  );
};

export default ItemListContainer;
