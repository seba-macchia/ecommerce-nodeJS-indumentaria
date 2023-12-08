import React, {useContext} from "react";
import { Container, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout.jsx";
import Basura from "../assets/basura.png";

export const Cart = () => {
  const { items, clear, onRemove } = useContext(CartContext);
  const navigate = useNavigate();
  const sumaTotal = items.reduce(
    (sumador, numeroActual) =>
      sumador + numeroActual.quantity * numeroActual.price,
      0
  );

  if (!items.length) {
    return (
      <Container className="mt-4">
      <h2 style={{ fontSize: "40px" }}>Su carro se encuentra vacío</h2>
      <br />
      <button
        style={{
          fontWeight: 600,
          color: "white",
          backgroundColor: "blue",
          fontSize: "25px",
          borderRadius: "8px",
        }}
        onClick={() => navigate("/")}
      >
        Ir a Inicio
      </button>
    </Container>
  );
}

  return (
    <Container className="mt-4">
      <h3> Confirmación de Compra</h3>
      <Table>
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>Nombre</th>
            <th style={{textAlign: "center"}}>Cantidad</th>
            <th style={{textAlign: "center"}}>Imagen</th>
            <th style={{textAlign: "center"}}>Precio</th>
            <th style={{textAlign: "center"}}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{textAlign: "center", fontSize:"22px"}}>{item.title}</td>
              <td style={{textAlign: "center", fontSize:"18px"}}>{item.quantity}</td>
              <td style={{textAlign: "center"}}>
                <img style={{width: "120px"}} src={item.pictureUrl} alt={item.title} />
              </td>
              <td style={{ fontSize: "26px", textAlign: "center", verticalAlign: "middle"}}>${item.price}</td>
              <td style={{textAlign: "center", verticalAlign: "middle"}}>
                <img
                    src={Basura}
                    alt="Cesto de Basura"
                    style={{ width: "70px", height: "70px", cursor: "pointer" }}
                    onClick={() => onRemove(item.id)}
                  />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot style={{ display: "flex", textAlign: "end", width: "fit-content"}}>
          <tr>
            <td colSpan="4">Total: ${sumaTotal}</td>
          </tr>
        </tfoot>
      </Table>
      <button
        style={{
          fontWeight: 600,
          color: "white",
          backgroundColor: "blue",
          fontSize: "15px",
          borderRadius: "8px",
        }}
        onClick={clear}
      >
        Vaciar Carrito
      </button>
      <hr />
      <Checkout sumaTotal= {sumaTotal} clear={clear} items={items}/>
    </Container>

  );
};