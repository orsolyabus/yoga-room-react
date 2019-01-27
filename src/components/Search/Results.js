import React from 'react';
import ResultList from './ResultList';
import Map from './Map';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

const Results = () => (
  <MDBContainer fluid className="Results pt-3">
    <MDBRow className="content">
      <MDBCol>
        <ResultList />
      </MDBCol>    
      <MDBCol>
        <Map />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default Results;