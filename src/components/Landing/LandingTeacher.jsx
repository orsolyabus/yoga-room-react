import React from 'react';
import Button from "react-bootstrap/Button";

const LandingTeacher = () => (
  <>
    <div class="my-4">
      <h2>Are you a teacher?</h2>
      <div class="bg-secondary p-2 text-white shadow-sm" style={{ "font-size": "1.2rem" }}>
        Do you have a professional online presence?
      </div>
      <p class="mt-4">Create your profile, add your classes, let students find you!</p>
      <Button href="#">
        Sign Up
      </Button>
    </div>
  </>
);

export default LandingTeacher;