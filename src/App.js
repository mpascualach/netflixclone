import React, { Component } from 'react';
import TitleList from './TitleList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      landingPage: []
    }
  }
  render() {
    let landingPage = [];
    if (this.props.searchTerm !== ''){
      let search = "Search results for " + this.props.searchTerm
      return (
        <div>
          <TitleList title={search}/>
        </div>
      )
    }
    else {
      return (
      <div>
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    )}
  }
}

export default App;
