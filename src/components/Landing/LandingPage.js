import React from 'react';
import LandingWelcome from './LandingWelcome';
import LandingClasses from './LandingClasses';
import BlogFeed from './BlogFeed';
import './Landing.css'

const LandingPage = () => (
  <main className="LandingPage">
    <LandingWelcome />
    <LandingClasses />
    <BlogFeed />
  </main>
);

export default LandingPage;
