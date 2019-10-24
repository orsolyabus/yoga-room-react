import React from 'react';
import AccountNav from './AccountNav';
import { Container, Card } from "react-bootstrap";
import Profile from './Profile';
import Favorites from './Favorites';
import MyClasses from './MyClasses';

const AccountPage = () => (
  <main className="AccountPage content">
    
    <Container fluid className="pt-3">
      <Card >
        <Card.Header className="p-0">
          <AccountNav />
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

export default AccountPage;