import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <header>    
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Swift Stitch Upholstery</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Textiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Fabric</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thread</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Leather</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>

    )
}

export default Header
