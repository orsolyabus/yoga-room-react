import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";

const SearchForm = () => (
  <Container fluid className="SearchForm">
    <form action="" className="white-text">
      <Row className="content">
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Check
            type='checkbox'
            id={`default-$'checkbox'`}
            label={`default $'checkbox'`}
          />
          <Form.Check
            type='radio'
            id={`default-$'radio'`}
            label={`default $'radio'`}
          />
        </Col>
      </Row>
    </form>
  </Container>
);

export default SearchForm;