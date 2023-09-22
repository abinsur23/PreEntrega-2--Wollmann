import React from 'react';
import logo from '../assets/logo1.jpg';
import CartWidget from './CartShop.jsx';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo1" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/origen/Estados Unidos" className="nav-link">
              Estados Unidos
            </NavLink>
          </li>
          <li>
            <NavLink to="/origen/Japon" className="nav-link">
              Japón
            </NavLink>
          </li>
          <li>
            <NavLink to="/origen/Escocia" className="nav-link">
              Escocia
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
