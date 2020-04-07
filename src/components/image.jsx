import React from 'react';

const Image = ({ id, src }) => {
  return (
    <div>
      {console.log('FART', src)}
      <img className='image zoom' key={id} src={src} alt={id}></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
