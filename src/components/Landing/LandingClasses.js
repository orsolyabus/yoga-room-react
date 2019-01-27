import React from 'react';
import NewClassesFeed from './NewClassesFeed';
import SimpleSearch from './SimpleSearch';

const LandingClasses = () => (
  
  <div className="LandingClasses">
  <div className="content py-4 row">
    < NewClassesFeed />
    < SimpleSearch />
  </div>
  </div>
);

export default LandingClasses;