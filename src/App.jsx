import './App.css'; // importo primero el css para que se apliquen los estilos sobre boostrapt

// importos los componentes
import { NavBar } from "./components/NavBar";
import { ItemListConteiner } from "./components/ItemListConteiner";

// funcion principal
function App() {

  return (
  <>
  <NavBar />
  <ItemListConteiner  greeting="Bienvenido a Indumentaria SM" /> 
  </>
  )
}
export default App
