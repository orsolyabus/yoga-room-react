import React from 'react';
import NewClassesFeed from './NewClassesFeed';
import SimpleSearch from './SimpleSearch';

const LandingClasses = () => (
  <div className="LandingClasses p-4 d-flex row">
    < NewClassesFeed />
    < SimpleSearch />
  </div>
);

export default LandingClasses;