import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

const SearchForm = () => (
  <MDBContainer fluid className="SearchForm">
    <form action="" className="white-text">
      <MDBRow>
        <MDBCol>
          <MDBInput label="Keyword" type="text" className="white-text" />
          <MDBInput label="Keyword" type="text" className="white-text" />
          <MDBInput label="Keyword" type="text" className="white-text" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Filled-in unchecked" type="checkbox" id="checkbox1" />
          <MDBInput label="Keyword" type="text" className="white-text" />
          <MDBInput label="Keyword" type="text" className="white-text" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Keyword" type="text" className="white-text" />
          <MDBInput label="Keyword" type="text" className="white-text" />
          <MDBInput label="Keyword" type="text" className="white-text" />
        </MDBCol>
      </MDBRow>
    </form>
  </MDBContainer>
);

export default SearchForm;