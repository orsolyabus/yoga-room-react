import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const TeacherCard = (props) => {
  const { teacher } = props;
  return (
    <Card className="shadow-sm mb-4" >
      <Card.Img variant="top" src="example.jpg" />
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Text>{teacher.info.introduction}</Card.Text>
        <Badge pill variant="primary" className="mx-1">
          yin
      </Badge>
        <Badge pill variant="primary" className="mx-1">
          hatha
      </Badge>
        <Badge pill variant="primary" className="mx-1">
          kundalini
      </Badge>

      </Card.Body>
      <Card.Footer>
        5 classes at 3 locations
    </Card.Footer>
    </Card>
  );
}

export default TeacherCard;