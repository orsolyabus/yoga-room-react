import React from 'react';
import Container from 'react-bootstrap/Container'
import TeacherList from './TeacherList'

const TeachersPage = () => (
  <Container>
    <h2 className="my-4">Teachers</h2>
    <TeacherList />
  </Container>
);

export default TeachersPage;