import React from 'react';

const Image = ({ url, id }) => {
  console.log(id);
  // console.log(item.url);
  return (
    <div>
      <img className='image' key={id} src={url} alt={id}></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
