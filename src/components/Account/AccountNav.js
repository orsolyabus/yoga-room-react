import React from 'react';
import { MDBBtn, MDBBtnGroup } from "mdbreact";

const AccountNav = () => (
  <div className="AccountNav">
    <MDBBtnGroup className="mr-2">
      <MDBBtn color="primary ">Profile</MDBBtn>
      <MDBBtn color="secondary ">Favorites</MDBBtn>
      <MDBBtn color="default ">My Classes</MDBBtn>
    </MDBBtnGroup>
  </div>
);

export default AccountNav;