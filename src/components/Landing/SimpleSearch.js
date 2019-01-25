// i18n
import React from 'react';
import { MDBInput, MDBFormInline, MDBIcon, MDBCol, MDBBtn } from "mdbreact";

const SimpleSearch = () => (
  <MDBCol className="SimpleSearch">
    <h3>quick search</h3>
    <form action="">
    {/* <MDBFormInline className="md-form">
      <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
    </MDBFormInline> */}
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