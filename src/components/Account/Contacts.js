import React from 'react';
import { Button  } from "react-bootstrap";

const Contacts = () => (
  <div className="Contacts" >
    <h3>Name</h3>
    <p>Phone number</p>
    <p>e-mail address</p>
    <p>web</p>
    <p>yoga styles:<br/>
      <Button color="secondary" className="yoga-style-pill">Yin</Button>
      <Button color="secondary" className="yoga-style-pill">Hatha</Button>
      <Button color="secondary" className="yoga-style-pill">Kundalini</Button>
    </p>
    <p>13 classes at 5 locations</p>
  </div>
);

export default Contacts;