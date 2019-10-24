import React from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";

const AccountNav = () => (
  <div className="AccountNav">
  <Navbar color="default-color" dark expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbarCollapse3" isOpen={true} navbar>
      <Nav left className="white-text">
        <Button color="primary">Profile</Button> 
        <Button color="primary">My classes</Button>
        <Button color="primary">Favorites</Button>
        <Button color="primary">Posts</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

export default AccountNav;