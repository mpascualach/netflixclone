import React, {Component} from 'react';
import Grid from 'react-css-grid'

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      url: ''
    }
    var apiKey = '87dfa1c669eea853da609d4968d294be'
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });
    }
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({mounted: true});
    }
  }

  loadContent() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
  }

  render() {
    let style = {
      border: '1px solid black',
      height: 140
    }
    return (<div>
      <div>
        <h3>{this.props.title}</h3>
      </div>
      <Grid
        width={100}
        gap = {24}>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
      </Grid>
    </div>)
  }
}

export default TitleList
