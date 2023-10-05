import React, { useState,useContext }  from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
  if (!item) {
    return <p>Cargando...</p>;
  }
  const [cantidad, setCantidad] = useState(0);

  const {addItem} = useContext(CartContext)    

  const handleOnAdd = (count) =>{ 
      setCantidad(count) 
      console.log(`Se agregaron ${count} de items del producto ${item.name}`)
      addItem(item, count)
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
      {cantidad>0&& <Link to="/cart">Finalizar compra</Link>}
    </div>
  );
};

export default ItemDetail;
