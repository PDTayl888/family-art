import React from 'react';

const navStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/head_band.jpg)`,
  color: 'white'
};

const NavBar = () => {
  return (
    <div style={navStyle}>
      <h1>NAVBAR</h1>
    </div>
  );
};

export default NavBar;
