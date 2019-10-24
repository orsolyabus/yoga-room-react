import React from 'react';
import ResultList from './ResultList';
import Map from './Map';
import { Container, Col, Row } from "react-bootstrap";

const Results = () => (
  <Container fluid className="Results pt-3">
    <Row className="content">
      <Col>
        <ResultList />
      </Col>    
      <Col>
        <Map />
      </Col>
    </Row>
  </Container>
);

export default Results;