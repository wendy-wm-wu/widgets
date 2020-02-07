import React, { Component } from 'react';

class DropDown extends Component {
  state = {
    value: '',
  }
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
    this.renderData(e.target.value); 
  };

  renderData = url => {
    this.props.fetchStarWarsData(url); 
  };

  render() {
    const { resources, data } = this.props;
    console.log(data);  
    return (
      <div className="dropdown">
        <label for="star-wars-dropdown">Choose a Star Wars API:</label>
        <select value={this.state.value} onChange={this.handleChange} >
          <option value="">--Please select an option--</option>
          {Object.values(resources).map((endpoint, i) => {
            return (
              <option key={i}>{endpoint}</option>
            )
          })}
        </select>
        <table>
          <thead></thead>
          <tbody>
              {data && data.map((item, i) => {
                return (
                  <tr>
                    <td key={i}>{item.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DropDown; 