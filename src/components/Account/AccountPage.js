import React from 'react';
import AccountNav from './AccountNav';
import { MDBContainer, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
import Profile from './Profile';
import Favorites from './Favorites';
import YogaClassList from './YogaClassList';

const AccountPage = () => (
  <main className="AccountPage">
    
    <MDBContainer fluid className="pt-3">
      <MDBCard >
        <MDBCardHeader className="p-0">
          <AccountNav />
        </MDBCardHeader>
        <MDBCardBody>
          <Profile />
          <Favorites />
          <YogaClassList />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </main>
);

export default AccountPage;