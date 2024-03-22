import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          React-Bootstrap
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Store" className="nav-link">
              Store
            </Link>
            <Link to="/Cart" className="nav-link">
              Cart
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link to="/" className="m-1 nav-link ">
                Home
              </Link>
              <Link to="/" className="m-1 nav-link">
                Home
              </Link>
              <Link to="/" className="m-1 nav-link">
                Home
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
