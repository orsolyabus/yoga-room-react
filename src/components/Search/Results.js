import React, { useState, useEffect } from 'react';
import ResultList from './ResultList';
import { Card, Nav, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarAlt, faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import { YogaClass } from "../requests";

const Results = () => {
  const [yogaClasses, setYogaClasses] = useState({ yogaClasses: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    YogaClass.all().then(ycs => {
      setYogaClasses(ycs)
      setLoading(false)
      // console.log(ycs[0])
    })
  }, []);
  if (loading) return (
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )

  return (
    <Card className="results">
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
        <ResultList yogaClasses={yogaClasses}/>
      </Card.Body>
    </Card>
  );
};

export default Results;