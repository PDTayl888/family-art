import React, { useState, useEffect } from 'react';
import Image from './image';
import { storage } from '../firebase.js';

const EllieGallery = () => {
  const [url, setUrl] = useState([]);

  const [imageArray] = useState(['ellie_bear.jpg', 'ellie_reggae.jpg']);

  useEffect(() => {
    imageArray.forEach((item) => {
      storage
        .ref(`Ellie/`)
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

export default EllieGallery;
