import React from 'react';
import ResultList from './ResultList';
import Map from './Map';
import { Card, Nav, Button } from "react-bootstrap";

const Results = () => (
  <Card >
    <Card.Header className="result-nav">
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link" disabled>Map</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Yoga Classes</Card.Title>
      <Card.Text>
        <ResultList/>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Results;