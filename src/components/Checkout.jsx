import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { cart, clear, getTotal } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: getTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clear();
            });
    }

    if (pedidoId) {
        return (
            <div>
                <h1>Muchas Gracias por su Compra</h1>
                <p>Tu número de pedido es:</p>
                <h3>{pedidoId}</h3>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(comprar)}>            
                <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail"  {...register("email")} />
                <input type="tel" placeholder="Ingresa tu Teléfono" {...register("telefono")} /> 

                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout;
