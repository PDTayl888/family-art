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
    imageArray.forEach((item) => {
      storage
        .ref(`Asher/`)
        .child(`${item}`)
        .getDownloadURL()
        .then((fireUrl) => {
          setUrl((currentState) => [...currentState, fireUrl]);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }, []);

  return (
    <div className='gallery-container'>
      {url.map((item, index) => (
        <div className='image'>
          {' '}
          <Image id={index} src={item} />
        </div>
      ))}
    </div>
  );
};

export default AsherGallery;
