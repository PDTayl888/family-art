import React, { Component } from 'react';
import MainGallery from './mainGallery';
import Image from './image';
import NavBar from './navBar';
import getImages from '../services/imagesService';
import firebase from '../firebase.js';

const db = firebase.database();
const dbRef = db.ref();

class Home extends Component {
  state = {
    imageArray: []
  };

  setDb() {
    console.log('setDb called');
    dbRef.child('url').set('gary');
  }

  // saveUrlsToDb() {
  //   const files = fileInput.files;

  //   const promises = [];

  //   for(let i=0; i < files.length; i++) {
  //     let files = files[i];

  //     promises.push(uploadAndSavePromise(file));
  //   }
  //   promises.all(promises);
  // }

  // uploadAndSavePromise(file) {
  //   const storageRef = firebase.storage().ref();
  //    const fileName = file.name
  //    // Remove extension
  //    const trimmedFileName = fileName.slice(0, -4)

  //    const imageRef = storageRef.child('test/'+fileName);

  //   return imageRef.put(file).then(function(snapshot) {

  //       db.collection("maincollection").doc(trimmedFileName).set({
  //       imageURL: snapshot.downloadURL,
  //       })
  //   }

  // }

  componentDidMount() {
    this.setDb();
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
