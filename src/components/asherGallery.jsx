import React, { useState, useEffect } from 'react';
import Image from './image';
import { storage } from '../firebase.js';

const AsherGallery = () => {
  const [url, setUrl] = useState([]);

  const [imageArray] = useState([
    'awesome.jpg',
    'emo.jpg',
    'head_band.jpg',
    'naruto.jpg',
    'sideways.jpg',
    'versus.jpg',
  ]);

  useEffect(() => {
    console.log('IMAGE ARRAY', imageArray);
    imageArray.forEach((item) => {
      storage
        .ref(`Asher/`)
        .child(`${item}`)
        .getDownloadURL()
        .then((fireUrl) => {
          console.log('FIRE URL: ', fireUrl);
          setUrl((currentState) => [...currentState, fireUrl]);
          console.log('image promise called');
          console.log('useEffect URL: ', url);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }, []);

  return (
    <div className='gallery-container'>
      {console.log(url)}
      {url.map((item, index) => (
        <Image id={index} src={item} />
      ))}
    </div>
  );
};

export default AsherGallery;
