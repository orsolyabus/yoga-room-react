import React from 'react';
import { Col, Row } from "react-bootstrap";

const ResultClass = () => (
  <div className="ResultClass">
    <h4>Title</h4>
    <Row>
      <Col>        
        <h6>location</h6>
        <h6>Teacher</h6>
        <h6>time</h6>
      </Col>
      <Col>
        <h6>book online spots: 5/12</h6>
      </Col>
    </Row>
    
  </div>
);

export default ResultClass;