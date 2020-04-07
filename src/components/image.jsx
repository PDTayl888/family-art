import React from 'react';

const Image = ({ id, src }) => {
  return <img className='zoom' key={id} src={src} alt={id}></img>;
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
