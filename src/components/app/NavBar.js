// i18n
import React from 'react';
import { NavLink } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBNavbarNav, MDBNavLink, MDBCollapse, MDBNavbarToggler} from "mdbreact";

const NavBar = () => (
  <MDBNavbar color="default-color" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text">Yoga Room</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler />
    <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
      <MDBNavbarNav left className="white-text">
        <MDBNavItem>
          <MDBNavLink exact to="/">Welcome</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink exact to="/search">Detailed Search</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
);

export default NavBar;
