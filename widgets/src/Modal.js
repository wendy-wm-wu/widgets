import React, { Component } from 'react';

class Modal extends Component {
  state = {
    show: false,
  }
  showModal = () => {
    this.setState({
      show: true,
    });
  };
  closeModal = () => {
    this.setState({
      show: false,
    }); 
  };
  render() {
    const { show } = this.state; 
    return (
      <div>
        <button className="toggle-button" onClick={this.showModal}>Show Modal</button>
        {show && ( <div className="modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
          <button onClick={this.closeModal}>Close</button>
        </div>)}
      </div>
    );
  }
}

export default Modal;