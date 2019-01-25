import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";
import Contacts from './Contacts';

const Profile = () => (
  <div className="Profile" >
    <h3>Profile</h3>
    <MDBRow className="mb-4">
      <MDBCol md="6" className="profile-pic">
        <img src="https://cdn.doyouyoga.com/wp/2013/09/10-Qualities-Of-An-Amazing-Yoga-Teacher.jpg=w768" className="img-fluid z-depth-2 profile-pic" alt="" />
      </MDBCol>
      <MDBCol md="6">
        <Contacts />
      </MDBCol>
    </MDBRow>
    <MDBRow className="mb-4">
      <MDBCol>
        <h4>Intorduction</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem consequatur rem, consectetur impedit placeat distinctio ullam ratione porro temporibus voluptatum, neque dolorum, libero laudantium cum voluptate tenetur? In, incidunt!</p>
      </MDBCol>
    </MDBRow>
  </div>
);

export default Profile;