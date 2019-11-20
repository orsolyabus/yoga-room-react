import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import { Container, Col, Row } from 'react-bootstrap';

const SearchPage = () => (
  <Container className="SearchPage">
    <h2 className="my-4">Yoga Classes</h2>
    <Row className="mb-4">
      <Col md="3">
        <SearchForm />
      </Col>
      <Col>
        <Results />
      </Col>
    </Row>
  </Container>
);

export default SearchPage;