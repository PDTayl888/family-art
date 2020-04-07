import React, { useState, useEffect } from 'react';
import Image from './image';
import { storage } from '../firebase.js';

const KorynGallery = () => {
  const [url, setUrl] = useState([]);

  const [imageArray] = useState(['k_sal.jpg']);

  useEffect(() => {
    imageArray.forEach((item) => {
      storage
        .ref(`Koryn/`)
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
      {console.log(url)}
      {url.map((item, index) => (
        <div className='image'>
          {' '}
          <Image id={index} src={item} />
        </div>
      ))}
    </div>
  );
};

export default KorynGallery;
