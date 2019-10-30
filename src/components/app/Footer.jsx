import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => (
  <div class="sticky-bottom bg-dark text-white mt-2 py-2" >
    <Nav justify className="mx-auto flex-column flex-sm-row" style={{ "max-width": "1110px" }}>
      <Nav.Item >
        <Navbar.Text>Contact: </Navbar.Text>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className="text-white">Terms of use</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className="text-white">Privacy policy</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Navbar.Text>© 2019 YogaRoom</Navbar.Text>
      </Nav.Item>
    </Nav>
  </div>
);

export default Footer;
