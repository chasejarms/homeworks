import React from 'react';
import GiphyIndexItem from './giphy_index_item';

class GiphysIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let giphyObjects = this.props.giphys.map((giphy, idx) =>
    <GiphyIndexItem key={idx} giphy={giphy} />
    );
    return (
      <ul>
        { giphyObjects }
      </ul>
    );
  }
}

export default GiphysIndex;
