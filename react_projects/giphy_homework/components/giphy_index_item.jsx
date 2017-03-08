import React from 'react';

const GiphyIndexItem = (props) => {
  console.log(props.giphy);
  return(
    <div>
      <img src={props.giphy.images.downsized.url}/>
    </div>
  );
};

export default GiphyIndexItem;
