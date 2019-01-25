// i18n
import React from 'react';
import { MDBCard, MDBListGroupItem, MDBListGroup } from "mdbreact";

const NewClassesFeed = () => (
  <div className="NewClassesFeed col-4">
    <MDBCard>
      <MDBListGroup>
        <MDBListGroupItem>New class 1 </MDBListGroupItem>
        <MDBListGroupItem>New class 2 </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  </div>
);

export default NewClassesFeed;