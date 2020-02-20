import React from 'react';

const Image = ({ url, item, id }) => {
  console.log(url);
  console.log(item.url);
  return (
    <div>
      <img className='image' key={id} item={item} src={url} alt={id}></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
