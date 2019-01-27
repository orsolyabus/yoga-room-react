import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from "mdbreact";
import ResultClass from './ResultClass';

const ResultList = () => (
  <div className="ResultList">
   <MDBCard >
    <MDBListGroup>
      <MDBListGroupItem>
        <ResultClass />
      </MDBListGroupItem>
      <MDBListGroupItem>
        <ResultClass />
      </MDBListGroupItem>
      <MDBListGroupItem>
        <ResultClass />
      </MDBListGroupItem>
    </MDBListGroup>
  </MDBCard>

  </div>
);

export default ResultList;