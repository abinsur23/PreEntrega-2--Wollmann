import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar'; 

import CartProvider from './components/CartContext';
import Cart from './components/Cart';




import './App.css'

function App() {
  return (
    <>
      <CartProvider>  
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/origen/:origenId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

