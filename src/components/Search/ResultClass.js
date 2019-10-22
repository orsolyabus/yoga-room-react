import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";

const ResultClass = () => (
  <div className="ResultClass">
    <h4>Title</h4>
    <MDBRow>
      <MDBCol>        
        <h6>location</h6>
        <h6>Teacher</h6>
        <h6>time</h6>
      </MDBCol>
      <MDBCol>
        <h6>book online spots: 5/12</h6>
      </MDBCol>
    </MDBRow>
    
  </div>
);

export default ResultClass;