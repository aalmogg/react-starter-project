import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">My React Starter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link>
          <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
