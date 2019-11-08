import React from 'react';
import ProfileNav from './ProfileNav';
import { Container, Card } from "react-bootstrap";
import Profile from './Profile';
import Favorites from './Favorites';
import MyClasses from './MyClasses';

const ProfilePage = () => (
  <main className="ProfilePage content">
    
    <Container fluid className="pt-3">
      <Card >
        <Card.Header className="p-0">
          <ProfileNav />
        </Card.Header>
        <Card.Body>
          <Profile />
          <Favorites />
          <MyClasses />
        </Card.Body>
      </Card>
    </Container>
  </main>
);

export default ProfilePage;