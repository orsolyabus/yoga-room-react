// i18n
import React from 'react';
import { Form, Col, Button } from "react-bootstrap";

const SimpleSearch = () => (
  <Col className="SimpleSearch">
    <h3>quick search</h3>
    <form action="">
      <Form.Control placeholder="First name" />
      <Button color="primary">Search</Button>
    </form>
  </Col>
);

export default SimpleSearch;