import React, { Component } from 'react';
import App from './App'
import './App.css';
class AppScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchUrl: '',
      landingPage: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleChange(e){
    this.setState({searchTerm:e.target.value})
  }

  handleKeyUp(e){
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl:searchUrl});
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" name="title" value={this.state.searchTerm} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
        <App searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AppScreen;
