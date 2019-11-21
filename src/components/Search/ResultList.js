import React from 'react';
import { CardColumns } from "react-bootstrap";
import ResultClass from './ResultClass';

const ResultList = (props) => {
  const { yogaClasses } = props;
  console.log(yogaClasses[0])
  
  return (
    <div className="ResultList">
      <CardColumns className="result-list">
        {yogaClasses.map(yc => <ResultClass key={yc.id} yogaClass={yc}/>)}
      </CardColumns>
    </div>
  );
}

export default ResultList;