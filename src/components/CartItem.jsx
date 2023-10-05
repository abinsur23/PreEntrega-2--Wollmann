import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div>
        <img src={item.image} alt="item" />
        <h5>{item.name}</h5>
        <p>Cantidad: {item.amount}</p>
        <p>Precio unitario: {item.price}</p>
        <p>Precio: {item.price * item.amount}</p>
        <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>
      </div>
    </>
  );
};

export default CartItem;
