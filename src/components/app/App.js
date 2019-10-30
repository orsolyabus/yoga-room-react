import React from 'react';
import LandingPage from '../Landing/LandingPage.jsx';
import SearchPage from '../Search/SearchPage';
import AccountPage from '../Account/AccountPage';
// import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/account" exact component={AccountPage} />
      <Footer />
    </div>
  </BrowserRouter>
  
);


export default App;
