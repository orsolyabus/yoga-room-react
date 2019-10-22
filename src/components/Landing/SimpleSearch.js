// i18n
import React from 'react';
import { MDBInput, MDBCol, MDBBtn } from "mdbreact";

const SimpleSearch = () => (
  <MDBCol className="SimpleSearch">
    <h3>quick search</h3>
    <form action="">
      <MDBInput
        label="Search"
        icon="search"
        group
        type="text"
        validate
        error="wrong"
        success="right"
      />
      <MDBBtn color="primary">Search</MDBBtn>
    </form>
  </MDBCol>
);

export default SimpleSearch;