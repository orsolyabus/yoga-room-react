import React from 'react';
import LandingWelcome from './LandingWelcome';
import LandingTeacher from './LandingTeacher';
import './Landing.css'
import Container from "react-bootstrap/Container";

const LandingPage = () => (
  <main className="LandingPage">
    <Container className="transparent">
      <LandingWelcome />
      <LandingTeacher />
    </Container>
  </main>
);

export default LandingPage;
