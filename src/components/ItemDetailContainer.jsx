import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productosJson from './productos.json';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()
    
    const getProductById = (id) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productosJson.find(prod => prod.id === parseInt(id)))
            }, 1000)
        })
    }

    useEffect(() => {
        getProductById(id)
            .then(productos => {
                setSelectedItem(productos)
            })
            .catch(err =>
                console.warn(err)
            )
    }, [id])


    return (
        <ItemDetail item={selectedItem} />
    )
}

export default ItemDetailContainer;

