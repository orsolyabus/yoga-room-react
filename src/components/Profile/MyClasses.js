import React from 'react';
import {  } from "react-bootstrap";
import YogaClassList from './YogaClassList';

const MyClasses = () => (
  <div  className="MyClasses" >
    <h3>My Classes</h3>
    <h4>Current</h4>
    <YogaClassList/>
    <h4>Past</h4>
    <YogaClassList/>
  </div>
);

export default MyClasses;