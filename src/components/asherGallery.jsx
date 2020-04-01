import React, { useState, useEffect } from 'react';
// import Image from './image';
import { storage } from '../firebase.js';
import FsLightbox from 'fslightbox-react';
// import Image from './image';

const AsherGallery = () => {
  const [imageArray] = useState([
    'awesome.jpg',
    'emo.jpg',
    'head_band.jpg',
    'naruto.jpg',
    'sideways.jpg',
    'versus.jpg'
  ]);
  const [url, setUrl] = useState([]);
  console.log('imageArray here -> ', imageArray);
  const [toggler, setToggler] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setImage = () => {
    console.log('SET IMAGE CALLED');
    imageArray.forEach(item => {
      storage
        .ref(`Asher/`)
        .child(`${item}`)
        .getDownloadURL()
        .then(fireUrl => {
          setUrl(currentState => [...currentState, fireUrl]);
          console.log('image promise called');
          console.log(url);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  useEffect(() => setImage(), [setImage]);

  // const state = {
  //   imageArray: [
  //     'awesome.jpg',
  //     'emo.jpg',
  //     'head_band.jpg',
  //     'naruto.jpg',
  //     'sideways.jpg',
  //     'versus.jpg'
  //   ],
  //   url: [],
  //   isVisible: false,
  //   slide: 0
  // };

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox toggler={toggler} sources={url} />
      <div>
        {/* {url.map((item, index) => (
          <Image id={index} urls={item} showSlide={this.handleShowSlide} />
        ))} */}
      </div>
    </>
  );
};

export default AsherGallery;

// this.state.imageArray.forEach(item => {
//   storage
//     .ref(`Asher/`)
//     .child(`${item}`)
//     .getDownloadURL()
//     .then(url => {
//       setImageArray();
//       this.setState({ url: [...this.state.url, url] });
//       console.log('image promise called');
//       console.log(this.state.url);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
