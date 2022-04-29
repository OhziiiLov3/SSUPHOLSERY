import React from 'react'
import logo from "../images/PrimaryIcon.png";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>    
     <Navbar bg="dark" variant="dark" expand="lg" collaspeonselect="true">
  <Container>
    <LinkContainer to='/'>
    <Navbar.Brand>Swift Stitch Upholstery</Navbar.Brand>
  </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="my-auto">
        <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <Nav.Link href="#link">About Us</Nav.Link>

        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Textiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Needles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thread</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Leather</NavDropdown.Item>
        </NavDropdown>
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /></a>

        <LinkContainer to='/cart'>
        <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/login'>
        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>

    )
}

export default Header
