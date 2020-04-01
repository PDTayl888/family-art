import React from 'react';

const Image = ({ urls, id, showSlide }) => {
  console.log(id, 'INDEX $$$$$$$');
  return (
    <div>
      <img
        onClick={() => {
          showSlide(id);
        }}
        className='image'
        key={id}
        src={urls}
        alt={id}
      ></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
