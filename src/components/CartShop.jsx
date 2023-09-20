import React from 'react';
import CartShopImage from "../assets/cartshop.svg";

function CartWidget() {
    const cartItemCount = 1;

    return (
        <div className="cart-widget">
            <img style={{width: 40}} src={CartShopImage} alt="carrito" />
            {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
            )}
        </div>
    );
}

export default CartWidget;
