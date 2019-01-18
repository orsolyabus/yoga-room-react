// i18n
import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavbarNav } from "mdbreact";

const NavBar = () => (
  <Navbar color="default-color" dark>
    <NavbarBrand>
      <strong className="white-text">Yoga Room</strong>
    </NavbarBrand>
    <NavbarNav left className="white-text">
      <NavItem>
        <NavLink exact to="/">Welcome</NavLink>
      </NavItem>
    </NavbarNav>
  </Navbar>
);

export default NavBar;
