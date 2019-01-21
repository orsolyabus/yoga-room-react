import React from 'react';
import AccountNav from './AccountNav';
import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
import Profile from './Profile';
import Favorites from './Favorites';
import MyClasses from './MyClasses';

const AccountPage = () => (
  <main className="AccountPage">
    
    <MDBContainer>
      <MDBCard style={{ marginTop: "1rem" }}>
        <MDBCardHeader >
          <AccountNav />
        </MDBCardHeader>
        <MDBCardBody>
          <Profile />
          <Favorites />
          <MyClasses />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </main>
);

export default AccountPage;