// importo la imagen del carrito
import cart from "../assets/cart.png"

// agrego el carrito y el span
export const CartWidget = () => {
  return (
  <> 
  <img src={cart} alt="cart"  width={35}/>
  <span> 5 </span>
  </>
  );
}