import React, { Component } from 'react';
import MainGallery from './mainGallery';
import Image from './image';
import NavBar from './navBar';
import getImages from '../services/imagesService';

// const publicPath = process.env.PUBLIC_URL + '/assets/images/';

class Home extends Component {
  state = {
    imageArray: []
  };

  componentDidMount() {
    this.setState({ imageArray: getImages() });
  }

  render() {
    console.log(this.state.imageArray);
    return (
      <div>
        <NavBar></NavBar>
        <MainGallery>
          {this.state.imageArray.map(item => (
            <Image url={item.url} item={item} id={item._id} />
          ))}
        </MainGallery>
        {/* <img
          alt={'fart'}
          src={process.env.PUBLIC_URL + '/images/naruto.jpg'}
        ></img> */}
        {/* <ResizeImage
          src={process.env.PUBLIC_URL + '/images/lion.jpg'}
          alt='Tsunami bt hokusai'
          resizeActive
          options={{ w: '40%', h: 100 }}
        /> */}
      </div>
    );
  }
}

export default Home;
