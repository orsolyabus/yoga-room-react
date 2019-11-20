import React from 'react';
import { Badge, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const ResultClass = () => (
  <Card className="ResultClass shadow-sm">
    <Card.Body>
      <Card.Title><Card.Link href="#">Title</Card.Link></Card.Title>
      <Card.Text>
        <h6>location</h6>
        <h6>Teacher</h6>
        <h6>time</h6>
        <Badge pill variant="primary" className="mx-1">
          yin
        </Badge>
        <FontAwesomeIcon icon={faCalendar} className="text-dark" />
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ResultClass;