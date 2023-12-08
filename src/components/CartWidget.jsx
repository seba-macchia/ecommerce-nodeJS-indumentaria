// importo la imagen del carrito
import cart from "../assets/cart.png"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

// agrego el carrito y el span
export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const sumaTotal = items.reduce(
    (sumador, numeroActual) => sumador + numeroActual.quantity,
    0
  )
  return (
  <> 
  <div style={{ textAlign: "center"}}>
    <Link to="/cart" style={{ textDecoration : "none"}}>
    <img src={cart} alt="carrito" style={{ width: "50px", height: "50px" }}/>
    <span style={{ color:"white"}}>{sumaTotal}</span>
    </Link>
  </div>
  </>
  );
}