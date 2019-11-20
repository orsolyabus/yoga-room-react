import React from 'react';
import { CardColumns } from "react-bootstrap";
import ResultClass from './ResultClass';

const ResultList = () => (
  <div className="ResultList">
    <CardColumns className="result-list">
      <ResultClass />
      <ResultClass />
      <ResultClass />
      <ResultClass />
      <ResultClass />
      <ResultClass />
    </CardColumns>
  </div>
);

export default ResultList;