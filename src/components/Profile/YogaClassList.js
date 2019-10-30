import React from 'react';
import {  } from "react-bootstrap";
import YogaClassCard from './YogaClassCard';

const YogaClassList = () => (
  <ul className="YogaClassList">
    <li>
      <YogaClassCard />
    </li>
    <li>
      <YogaClassCard />
    </li>
    <li>
      <YogaClassCard />
    </li>
    <li>
      <YogaClassCard />
    </li>
  </ul>
);

export default YogaClassList;