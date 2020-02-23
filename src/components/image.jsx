import React from 'react';
// import firebase from 'firebase/app';

const imageUrls = [];
// const storage = firebase.storage();
// const gsReference = storage.refFromURL(
//   'gs://family-gallery-d94d4.appspot.com/Asher/awesome.jpg'
// );

// gsReference
//   .child('gs://family-gallery-d94d4.appspot.com/Asher/awesome.jpg')
//   .getDownloadURL()
//   .then(url => {
//     console.log(url);
//     imageUrls.push(url);
//   });
// console.log(imageUrls);

const Image = ({ url, item, id }) => {
  // console.log(url);
  // console.log(item.url);
  return (
    <div>
      <img
        className='image'
        key={id}
        item={item}
        src={imageUrls[0]}
        alt={id}
      ></img>
    </div>
  );
};

export default Image;

// https://ichef.bbci.co.uk/news/976/cpsprodpb/AECD/production/_107894744_alien976.jpg
