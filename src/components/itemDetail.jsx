import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";
import Swal from 'sweetalert2';


export const ItemDetail = ({ item }) => {
  const containerStyle = {
    border: '1px solid #ccc', // Solo para visualizar el contenedor
    padding: '20px', // Agrega espacio interno para separar el contenido del borde
    margin: 'auto', // Centra el contenedor horizontalmente
    maxWidth: '350px', // Establece un ancho máximo para evitar que el contenedor sea excesivamente ancho
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '20px', // Establece un tamaño de fuente más pequeño para el título
  };

  const { onAdd } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    if (item.stock > 0) {
      onAdd(item, quantity);
      item.stock = item.stock - quantity;
    } else {
      Swal.fire({
        title: 'Sin Stock',
        text: 'Producto sin stock',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <>
    <h1 className="display-4" style={titleStyle}>{item.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={containerStyle}>
          <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '100%', height: 'auto' }} />
          <p style={{ fontSize: '14px' }}>{item.description}</p>
          <p style={{ fontSize: '12px', textAlign: 'center' }}>PRECIO: ${item.price}</p>
          <h2>Stock: {item.stock} </h2>
          <ItemCounter onAdd={handleAddToCart} stock={item.stock} initial={1}/>
        </div>
      </div>
    </>
  );
};
