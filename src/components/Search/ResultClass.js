import React from 'react';
import { Badge, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const ResultClass = () => (
  <Card className="ResultClass shadow-sm">
    <Card.Body>
      <Card.Title><Card.Link href="#"><b>Title</b></Card.Link></Card.Title>
      <h6>location</h6>
      <h6>Teacher</h6>
      <h6>time</h6>
      <Badge pill variant="secondary-light" className="mx-1">
        yin
      </Badge>
      <FontAwesomeIcon icon={faCalendar} className="text-dark" />
    </Card.Body>
  </Card>
);

export default ResultClass;