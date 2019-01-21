import React, { Component } from 'react';
import LandingPage from '../Landing/LandingPage';
import SearchPage from '../Search/SearchPage';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
// import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" exact component={SearchPage} />
    </div>
  </BrowserRouter>
);


export default App;
