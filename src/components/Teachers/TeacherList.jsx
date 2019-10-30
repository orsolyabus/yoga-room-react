import React from 'react';
import TeacherCard from './TeacherCard'
import CardColumns from 'react-bootstrap/CardColumns';

const TeachersList = () => {
  const teachers = [1,2,3,4,2,2];
  console.log(teachers);
  
  return (
  <CardColumns>
    {teachers.map(() => <TeacherCard/>)}
  </CardColumns>
)};

export default TeachersList;