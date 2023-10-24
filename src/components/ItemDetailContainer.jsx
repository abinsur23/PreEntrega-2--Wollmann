import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../main';

const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            const docRef = doc(db, "productos", id);
            getDoc(docRef)
                .then((resp) => {
                    setSelectedItem({ ...resp.data(), id: resp.id });
                });
        }
    }, [id]);

    return (
        <ItemDetail item={selectedItem} />
    );
}

export default ItemDetailContainer;
