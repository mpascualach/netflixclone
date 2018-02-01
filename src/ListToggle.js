import React, { Component } from 'react';
import './ListToggle.css'

class ListToggle extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.toggled === false){
      this.setState({toggled: true})
    }
    else {
      this.setState({toggled: false})
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
      </div>
    )
  }
}

export default ListToggle
