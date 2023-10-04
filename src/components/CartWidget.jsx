import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Cambio en la importación
import CartShopImage from '../assets/cartshop.svg';

function CartWidget() {
    const { getQuantity } = useContext(CartContext); // Uso de useContext

    return (
        <Link to="/cart" className="cart-widget">
            <img style={{ width: 40 }} src={CartShopImage} alt="carrito" />
            {getQuantity() > 0 && <button>{getQuantity()}</button>}
        </Link>
    );
}

export default CartWidget;
