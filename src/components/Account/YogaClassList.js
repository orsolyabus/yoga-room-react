import React from 'react';
import {  } from "mdbreact";
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