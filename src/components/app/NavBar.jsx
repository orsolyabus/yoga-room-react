import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">
      YogaRoom
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="navbarCollapse3" >
      <Nav className="white-text mr-auto">
        <Nav.Link href="/search">Search Classes</Nav.Link>
        <Nav.Link href="/teachers">Teachers</Nav.Link>
        
        <Nav.Link href="/contact">Contact</Nav.Link>
        
        <NavDropdown title="For Teachers" disabled>
          <NavDropdown.Item>What's in it for you?</NavDropdown.Item>
          <NavDropdown.Item>Are you a Studio?</NavDropdown.Item>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.Item>Register</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
      <Nav className="white-text ml-auto">
        <Nav.Link href="/profile">My page</Nav.Link>
        <Nav.Link to="#">Log in</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
