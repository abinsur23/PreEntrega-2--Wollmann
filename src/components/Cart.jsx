import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, clear,getTotal} = useContext(CartContext)

  return (
    <>
    <h1>Bienvenidos al carrito</h1>
    <hr />
    {      cart.length !== 0 ?
        (
          <div>
            <div>
              {cart.map((e) => <CartItem key={e.id} item={e} />)}
              <br/>
              {`Total:  $ ${getTotal()}`}
              <br/>
              <button onClick={clear}>Vaciar Carrito</button>
              <br />
              <br />
                
            </div>
          </div>
        ) : (
          <div>
            <h3>El carrito esta vacio</h3>
            <Link to='/'>Ir a la tienda</Link>
          </div>
        )
    }
    
  </>
  )

}

export default Cart