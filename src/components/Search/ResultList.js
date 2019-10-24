import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import ResultClass from './ResultClass';

const ResultList = () => (
  <div className="ResultList">
   <Card >
    <ListGroup>
      <ListGroup.Item>
        <ResultClass />
      </ListGroup.Item>
      <ListGroup.Item>
        <ResultClass />
      </ListGroup.Item>
      <ListGroup.Item>
        <ResultClass />
      </ListGroup.Item>
    </ListGroup>
  </Card>

  </div>
);

export default ResultList;