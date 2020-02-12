import React, { Component } from 'react';
import MainGallery from './mainGallery';
import Image from './image';
import NavBar from './navBar';
import images from '../services/imagesService';

const publicPath = process.env.PUBLIC_URL + '/assets/images/';

class Home extends Component {
  state = {
    imageArray: []
  };

  componentDidMount() {
    console.log('didMOunt');
    console.log(images[0].url);
    this.setState({ imageArray: images });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MainGallery>
          {this.state.imageArray.map(item => (
            <Image key='item._id' url={item.url}></Image>
          ))}
        </MainGallery>
      </div>
    );
  }
}

export default Home;