import React from 'react';
import { MDBBtn  } from "mdbreact";

const Contacts = () => (
  <div className="Contacts" >
    <h3>Name</h3>
    <p>Phone number</p>
    <p>e-mail address</p>
    <p>web</p>
    <p>yoga styles:<br/>
      <MDBBtn color="secondary" className="yoga-style-pill">Yin</MDBBtn>
      <MDBBtn color="secondary" className="yoga-style-pill">Hatha</MDBBtn>
      <MDBBtn color="secondary" className="yoga-style-pill">Kundalini</MDBBtn>
    </p>
    <p>13 classes at 5 locations</p>
  </div>
);

export default Contacts;