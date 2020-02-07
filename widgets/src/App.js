import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import Stopwatch from './Stopwatch';
import Modal from './Modal';
import DropDown from './DropDown';

class App extends Component {
  state = {
    resources: {},
    data: [],
  }
  componentDidMount = () => {
    this.fetchStarWarsResources(); 
  }
  //TODO: fetch options and pass to Drop Down component 
  //TODO: fetch data for specific options
  fetchStarWarsResources = () => {
    axios.get('https://swapi.co/api/')
      .then((res) => {
        this.setState({
          resources: res.data,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchStarWarsData = url => {
    axios.get(url)
      .then((res) => {
        console.log(res.data.results); 
        this.setState({
          data: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="timers">
          <Stopwatch />
        </div>
        <Modal />
        <DropDown resources={this.state.resources} fetchStarWarsData={this.fetchStarWarsData} data={this.state.data} />
      </div>
    );
  }
}

export default App;
