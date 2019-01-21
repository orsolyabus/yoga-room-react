import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

const SearchPage = () => (
  <main className="SearchPage">
    <SearchForm />
    <Results />
  </main>
);

export default SearchPage;