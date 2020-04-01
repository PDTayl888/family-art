import React, { useState, useEffect } from 'react';
// import Image from './image';
import { storage } from '../firebase.js';
import FsLightbox from 'fslightbox-react';
import Image from './image';

const setImage = () => {
  this.state.imageArray.forEach(item => {
    storage
      .ref(`Asher/`)
      .child(`${item}`)
      .getDownloadURL()
      .then(url => {
        setImageArray();
        this.setState({ url: [...this.state.url, url] });
        console.log('image promise called');
        console.log(this.state.url);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};

const AsherGallery = () => {
  const [toggler, setToggler] = useState(false);
  useEffect(() => console.log('mounted'), []);

  const state = {
    imageArray: [
      'awesome.jpg',
      'emo.jpg',
      'head_band.jpg',
      'naruto.jpg',
      'sideways.jpg',
      'versus.jpg'
    ],
    url: [],
    isVisible: false,
    slide: 0
  };

  const [imageArray, setImageArray] = useState([
    'awesome.jpg',
    'emo.jpg',
    'head_band.jpg',
    'naruto.jpg',
    'sideways.jpg',
    'versus.jpg'
  ]);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=xshEZzpS4CQ',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]}
      />
      <div>
        {this.state.url.map((item, index) => (
          <Image id={index} urls={item} showSlide={this.handleShowSlide} />
        ))}
      </div>
    </>
  );
};

export default AsherGallery;
