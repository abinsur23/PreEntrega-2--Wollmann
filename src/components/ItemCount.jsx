import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd({ ...item, cant: count });
  };

  return (
    <div>
      <div>
        <button onClick={decrementar}>-</button>
      </div>

      <div>
        <h2>{count}</h2>
      </div>

      <div>
        <button onClick={incrementar}>+</button>
      </div>

      <div>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
