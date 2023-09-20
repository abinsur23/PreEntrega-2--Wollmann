import React from 'react'
import logo from "../assets/logo1.jpg";
import CartWidget from './CartShop.jsx';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <Link to={"/"} >
                <img style={{ width: 90 }} src={logo} alt="logo1" />
            </Link>
            <div>
                <ul>
                    <li>
                        <NavLink to="/origen/Estados Unidos">Estados Unidos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/origen/Japon">Japón</NavLink>
                    </li>
                    <li>
                        <NavLink to="/origen/Escocia">Escocia</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
