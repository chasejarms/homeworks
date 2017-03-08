import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.search);
    this.setState({
      search: ""
    });
  }

  render() {
    return(
      <section>
        <form>
          <input onChange={this.handleChange} type="text" value={this.state.search}/>
          <input onClick={this.handleSubmit} type="submit"/>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </section>
    );
  }
}

export default GiphysSearch;
