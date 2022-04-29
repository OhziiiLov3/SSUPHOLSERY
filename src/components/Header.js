import React from 'react'
import logo from "../images/PrimaryIcon.png";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <header>    
     <Navbar bg="dark" variant="dark" expand="lg" collaspeonselect="true">
  <Container>
    <Navbar.Brand href="/">Swift Stitch Upholstery</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Textiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Needles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thread</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Leather</NavDropdown.Item>
        </NavDropdown>
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /></a>
        <Nav.Link href="#link"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        <Nav.Link href="#link"><i className="fas fa-user"></i>Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>

    )
}

export default Header
