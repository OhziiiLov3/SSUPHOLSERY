import React from 'react'
import logo from "../assets/PrimaryIcon.png";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collaspeonselect="true">
          <Container>
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="logo..." />
            </a>
            <LinkContainer to="/">
              <Navbar.Brand>Swift Stitch Upholstery</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/">
                  <Link
                    smooth={true}
                    to="/"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    Home
                  </Link>
                </LinkContainer>
                <NavDropdown
                  href="/services"
                  className="dropdown"
                  title="Store"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/store">Store</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/volkswagen">
                    Volkswagen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#supplies">
                    Upholstery Supplies + Tools
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#seatcovers">
                    Pre-Made Seat Covers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/merchandise">
                    Merchandise
                  </NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/about">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                  <Link
                    smooth={true}
                    to="blog"
                    offset={-100}
                    className="nav-link"
                    href="#"
                  >
                    Blog
                  </Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
