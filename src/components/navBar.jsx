import React from 'react';

const NavBar = () => {
  return (
    <div
      className={'navbar'}
      styles={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/head_band.jpg)`
      }}
    >
      <h1>NAVBAR</h1>
    </div>
  );
};

export default NavBar;
