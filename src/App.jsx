import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar'; 
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/origen/:origenId" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

