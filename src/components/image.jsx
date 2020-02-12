import React from 'react';

const publicPath = process.env.PUBLIC_URL + '/assets/images/';

const Image = ({ url }) => {
  console.log(publicPath);
  console.log(publicPath + url);
  return (
    <div>
      <img src={publicPath + url} alt={'failed to load'}></img>
    </div>
  );
};

export default Image;
