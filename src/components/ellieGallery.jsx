import React, { Component } from 'react';
import Image from './image';
import { storage } from '../firebase.js';

class EllieGallery extends Component {
  state = {
    ellieImageArray: [
      'awesome.jpg',
      'emo.jpg',
      'head_band.jpg',
      'naruto.jpg',
      'sideways.jpg',
      'versus.jpg'
    ],
    url: []
  };

  setImage() {
    console.log('setImage called now');
    this.state.ellieImageArray.forEach(item => {
      storage
        .ref(`Ellie/`)
        .child(`${item}`)
        .getDownloadURL()
        .then(url => {
          this.setState({ url: [...this.state.url, url] });
          console.log('image promise called');
          console.log(this.state.url);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  componentDidMount() {
    this.setImage();
  }

  render() {
    return (
      <div className='gallery-container'>
        {this.state.url.map((item, index) => (
          <Image url={item} id={index} key={index} />
        ))}
      </div>
    );
  }
}

export default EllieGallery;
