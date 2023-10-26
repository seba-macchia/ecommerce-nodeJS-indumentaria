// importo los componentes de bootstrap y el carrito
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"

// creo el header con el navbar
export const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md"> 
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">Indumentaria SM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto my-2 my-lg-0">
              <Nav.Link href="#Indumentaria">Indumentaria</Nav.Link>
              <Nav.Link href="#Calzados">Calzados</Nav.Link>
              <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
)
}