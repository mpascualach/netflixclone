import React, { Component } from 'react';
import './App.css';
import TitleList from './TitleList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchUrl: '',
      mounted: false
    };
    var apiKey = '87dfa1c669eea853da609d4968d294be'
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
    var searchResults = this.state.searchTerm !== '' ? "Search results for " + this.state.searchTerm : ''
    return (
      <div className="App">
        <input type="text" name="title" value={this.state.searchTerm} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
        <TitleList title={searchResults} url={this.state.searchUrl}/>
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
