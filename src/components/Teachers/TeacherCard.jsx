import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const TeacherCard = (props) => {
  const { teacher } = props;
  console.log(teacher)
  return (
    <Card className="shadow-sm mb-4" >
      <Card.Img variant="top" src="example.jpg" />
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Text>
          Teacher into. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut molestias accusamus nobis sequi, expedita harum debitis, eligendi deleniti, possimus vel eaque at est? Asperiores ad odio non nam unde!
      </Card.Text>
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