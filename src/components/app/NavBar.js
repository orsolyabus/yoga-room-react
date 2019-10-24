// i18n
import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => (
  <Navbar color="default-color" dark expand="md">
    <Navbar.Brand href="/">
      Yoga Room
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="navbarCollapse3" isOpen={true} navbar>
      <Nav left className="white-text">
        <Nav.Link href="/search">Detailed Search</Nav.Link>
        <NavDropdown title="For Teachers">
          <NavDropdown.Item>What's in it for you?</NavDropdown.Item>
          <NavDropdown.Item>Are you a Studio?</NavDropdown.Item>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.Item divider />
          <NavDropdown.Item>Register</NavDropdown.Item>
        </NavDropdown>

      </Nav>
      <Nav right className="white-text">

        <Nav.Link href="/account">Account</Nav.Link>


        <Nav.Link to="#">Log in</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
