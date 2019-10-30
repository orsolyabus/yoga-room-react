import React from 'react';
import LandingWelcome from './LandingWelcome';
import LandingTeacher from './LandingTeacher';
import './Landing.css'
import Container from "react-bootstrap/Container";

const LandingPage = () => (
  <Container className="transparent">
    <LandingWelcome />
    <LandingTeacher />
  </Container>
);

export default LandingPage;
