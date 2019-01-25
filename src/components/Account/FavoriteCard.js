import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";

const FavoriteCard = () => (
  <div className="FavoriteCard" >
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
          <MDBCardText>
            This is a wider panel with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  </div>
);

export default FavoriteCard;
