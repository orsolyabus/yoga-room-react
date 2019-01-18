import React, { Component } from 'react';
import LandingPage from '../Landing/LandingPage'
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < NavBar />
        </header>
        < LandingPage />
      </div>
    );
  }
}

export default App;
