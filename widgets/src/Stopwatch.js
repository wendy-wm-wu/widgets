import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0, //time started since start/reset
    timerTime: 0, //time in ms that has elapsed since start/reset
  }
  startTime = () => {
    const { timerTime, timerStart } = this.state;
    this.setState({
      timerOn: true,
      timerStart: Date.now() - timerTime,
      timerTime,
    });
    this.time = setInterval(() => {
      this.setState({
        timerTime: Date.now() - timerStart,
      });
    }, 5);
  };

  stopTime = () => {
    this.setState({
      timerOn: false,
    });
    clearInterval(this.time); 
  };

  resetTime = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    })
  };

  render() {
    const { timerTime, timerOn } = this.state;
    let hours = ('0' + Math.floor(timerTime/3600000)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime/60000)) % 60).slice(-2);
    let seconds = ('0' + (Math.floor(timerTime/1000)) % 60).slice(-2); 
    return (
      <div className="stopwatch">
        <div className="stopwatch-display">
          {hours} : {minutes} : {seconds}
        </div>
          {!timerOn && timerTime === 0 && (
            <button onClick={this.startTime}>Start</button>
          )}
          <button onClick={this.stopTime}>Stop</button>
          {!timerOn && timerTime > 0 && (
              <button onClick={this.startTime}>Resume</button>
          )}
          <button onClick={this.resetTime}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;