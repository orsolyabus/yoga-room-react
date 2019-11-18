import React from 'react';
import SimpleSearch from './SimpleSearch.jsx';
import Image from "react-bootstrap/Image";

const LandingWelcome = () => (
  <>
    <h1 className="text-center m-4">Welcome to the YogaRoom!</h1>
    <h2>Looking for a class?</h2>
    <p>You can find here different styles, levels, locations of yoga and meditation. Look around or search for something specific!</p>
    <SimpleSearch />
    <div className="d-flex justify-content-center">
      <Image src="mindfulness.svg" fluid className="mx-auto" />
    </div>
  </>
);

export default LandingWelcome;