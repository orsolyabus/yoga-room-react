import React from 'react';
import LandingPage from '../Landing/LandingPage.jsx';
import SearchPage from '../Search/SearchPage';
import ProfilePage from '../Profile/ProfilePage';
import TeachersPage from '../Teachers/TeachersPage'
// import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './NavBar.jsx';
import Footer from './Footer';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/teachers" exact component={TeachersPage} />
      <Footer />
    </div>
  </BrowserRouter>
  
);


export default App;
