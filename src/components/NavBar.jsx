// importo react-router-dom (NavLink)
import { NavLink } from "react-router-dom";
// importo los componentes de bootstrap y el carrito
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/SM.png";
import { NavDropdown } from 'react-bootstrap';
import { CartWidget } from "./CartWidget";

// creo el header con el navbar

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width={80}
              alt="Logo Personal"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <Nav.Link as={NavLink} to="/category/Indumentaria">
                  Indumentaria
                </Nav.Link>
                <Nav.Link as={NavLink} to="/category/Calzados">
                  Calzados
                </Nav.Link>
                <Nav.Link as={NavLink} to="/category/Accesorios">
                  Accesorios
                </Nav.Link>
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};
