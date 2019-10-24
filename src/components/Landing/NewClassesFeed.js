// i18n
import React from 'react';
import { Card, ListGroup } from "react-bootstrap";

const NewClassesFeed = () => (
  <div className="NewClassesFeed col-4">
    <Card>
      <ListGroup>
        <ListGroup.Item>New class 1 </ListGroup.Item>
        <ListGroup.Item>New class 2 </ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
);

export default NewClassesFeed;