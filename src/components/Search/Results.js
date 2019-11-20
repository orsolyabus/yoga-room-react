import React from 'react';
import ResultList from './ResultList';
import { Card, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faCalendarPlus } from '@fortawesome/free-regular-svg-icons'

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
      <Card.Title>
        <Row>
          <Col>
            Yoga Classes
          </Col>
          <Col md="auto">
            <small>
              <span className="mr-2">
                <FontAwesomeIcon icon={faCalendar} className="text-dark mx-2" />
                regular weekly class
              </span>
              <span className="mr-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-warning mx-2" />
                limited length course
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarPlus} className="text-success mx-2" />
                workshop
              </span>
            </small>
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>
        <ResultList />
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Results;