import React from 'react';

// const publicPath = process.env.PUBLIC_URL + '/assets/images/';

const Image = ({ url, item }) => {
  console.log(url);
  console.log(item.url);
  return (
    <div>
      <img src={url} alt='FAILED TO LOAD'></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
