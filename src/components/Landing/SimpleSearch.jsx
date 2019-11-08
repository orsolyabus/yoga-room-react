import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SimpleSearch = () => (
  <div className="SimpleSearch">
    <Form className="simpleForm">
      <Row>
        <Col>
          <Form.Group controlId="SimpleSearch">
            <Form.Control placeholder="keyword" />
          </Form.Group>
        </Col>
        <Col md="auto">
          <Button color="primary">Search</Button>
        </Col>
      </Row>
    </Form>
  </div>
);

export default SimpleSearch;