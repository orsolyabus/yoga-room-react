import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardText, MDBCardTitle } from "mdbreact";
import YogaClassCard from './YogaClassCard';

const YogaClassList = () => (
  <div className="YogaClassList" >
    <h3>My Classes</h3>
    <MDBRow>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
      <MDBCol xl="3" lg="4" md="6" className="mt-4">
        <YogaClassCard />
      </MDBCol>
    </MDBRow>
  </div>
);

export default YogaClassList;