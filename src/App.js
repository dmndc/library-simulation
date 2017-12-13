import React, { Component } from 'react';
import './App.css';

// Import components
import NavBar from './components/NavBar/NavBar';

// Import router
import router from './router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          { router }
        </div>
      </div>
    );
  }
}

export default App;
