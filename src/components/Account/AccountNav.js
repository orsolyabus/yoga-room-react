import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBBtn, MDBCollapse, MDBNavbarToggler } from "mdbreact";

const AccountNav = () => (
  <div className="AccountNav">
  <MDBNavbar color="default-color" dark expand="md">
    <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
      <MDBNavbarNav left className="white-text">
        <MDBBtn color="primary">Profile</MDBBtn> 
        <MDBBtn color="primary">My classes</MDBBtn>
        <MDBBtn color="primary">Favorites</MDBBtn>
        <MDBBtn color="primary">Posts</MDBBtn>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
  </div>
);

export default AccountNav;