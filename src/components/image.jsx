import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

const Image = ({ url, id }) => {
  console.log(id);
  // console.log(item.url);
  return (
    <SRLWrapper>
      <div>
        <img className='image' key={id} src={url} alt={id}></img>
      </div>
    </SRLWrapper>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
