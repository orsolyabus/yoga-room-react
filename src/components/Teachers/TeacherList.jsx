import React, { useState, useEffect } from 'react';
import TeacherCard from './TeacherCard'
import CardColumns from 'react-bootstrap/CardColumns';
import { Teacher } from "../requests";
import Spinner from 'react-bootstrap/Spinner'

const TeachersList = () => {
  const [teachers, setTeachers] = useState({ teachers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Teacher.all().then(Ts => {
      setTeachers(Ts)
      setLoading(false)
    })
  }, []);
  if (loading) return (
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )

  return (
    <CardColumns>
      {teachers.map((t) => <TeacherCard key={t.id} teacher={t} />)}
    </CardColumns>
  )
};

export default TeachersList;