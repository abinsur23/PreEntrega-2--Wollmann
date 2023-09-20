import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()
    const getProductById = (id) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
            }, 1000)
        })
    }

    useEffect(() => {
        setLoad(true)
        getProductById(id)
            .then(productos => {
                setSelectedItem(productos)
                setLoad(false)
            })
            .catch(err =>
                console.warn(err)
            )
    }, [id])
}

export default ItemDetailContainer

