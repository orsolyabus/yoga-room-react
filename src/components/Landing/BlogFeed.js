// i18n
import React from 'react';
import { Container, Card, CardGroup } from "react-bootstrap";

const BlogFeed = () => (
  <Container fluid className="BlogFeed p-4">
    <CardGroup  deck className="content"> 
      <Card >
        <Card.Body>
          Blog post 1
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
          Blog post 2
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
          Blog post 3
        </Card.Body>
      </Card>
      <Card >
        <Card.Body>
          Blog post 4
        </Card.Body>
      </Card>
    </CardGroup>
  </Container>
);

export default BlogFeed;