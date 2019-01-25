import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardText, MDBCardTitle } from "mdbreact";

const YogaClassCard = () => (
  <div className="YogaClassCard" >
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBCardText>
            This is a wider panel with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </MDBCardText>
          <MDBCardText small muted>
            Last updated 3 mins ago
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  </div>
);

export default YogaClassCard;
