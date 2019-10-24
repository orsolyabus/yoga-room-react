import React from 'react';
import { Col, Row } from "react-bootstrap";
import Contacts from './Contacts';

const Profile = () => (
  <div className="Profile" >
    <h3>Profile</h3>
    <Row className="mb-4">
      <Col md="6" className="profile-pic">
        <img src="https://cdn.doyouyoga.com/wp/2013/09/10-Qualities-Of-An-Amazing-Yoga-Teacher.jpg=w768" className="img-fluid z-depth-2 profile-pic" alt="" />
      </Col>
      <Col md="6">
        <Contacts />
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <h4>Intorduction</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem consequatur rem, consectetur impedit placeat distinctio ullam ratione porro temporibus voluptatum, neque dolorum, libero laudantium cum voluptate tenetur? In, incidunt!</p>
      </Col>
    </Row>
  </div>
);

export default Profile;