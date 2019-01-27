// i18n
import React from 'react';
import { NavLink } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBNavbarNav, MDBNavLink, MDBCollapse, MDBNavbarToggler, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdbreact";

const NavBar = () => (
  <MDBNavbar color="default-color" dark expand="md">
    <MDBNavbarBrand>
      <NavLink exact to="/" className="white-text">Yoga Room</NavLink> 
    </MDBNavbarBrand>
    <MDBNavbarToggler />
    <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
      <MDBNavbarNav left className="white-text">
        <MDBNavItem>
          <MDBNavLink exact to="/search">Detailed Search</MDBNavLink>
        </MDBNavItem>
        
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
            For Teachers
            </MDBDropdownToggle>
            <MDBDropdownMenu className="" >
              <MDBDropdownItem>What's in it for you?</MDBDropdownItem>
              <MDBDropdownItem>Are you a Studio?</MDBDropdownItem>
              <MDBDropdownItem></MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Register</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right className="white-text">
        <MDBNavItem>
          <MDBNavLink exact to="/account">Account</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#">Log in</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
);

export default NavBar;
