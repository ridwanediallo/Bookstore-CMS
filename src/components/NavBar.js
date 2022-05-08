import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#book">
            <Link to="/" className="link">
              Books
            </Link>
          </Nav.Link>
          <Nav.Link href="#categories">
            <Link to="/" className="link">
              Categories
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#icon">Icon</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
