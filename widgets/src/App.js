import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="timers">
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
