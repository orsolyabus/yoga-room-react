import React from 'react';
import { Card } from "react-bootstrap";

const FavoriteCard = () => (
  <div className="FavoriteCard" >
      <Card>
        <Card.Body>
          <Card.Title tag="h5">Panel title</Card.Title>
          <Card.Text>
            This is a wider panel with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
  </div>
);

export default FavoriteCard;
