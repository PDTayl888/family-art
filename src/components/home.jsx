import React, { Component } from 'react';
import MainGallery from './mainGallery';
import Image from './image';
import NavBar from './navBar';
import getImages from '../services/imagesService';
import firebase from '../firebase.js';

const storage = firebase.storage();
const gsReference_awesome = storage.refFromURL(
  'gs://family-gallery-d94d4.appspot.com/'
);
const db = firebase.database();
const dbRef = db.ref();

class Home extends Component {
  state = {
    imageArray: [],
    url: ''
  };

  setImage() {
    console.log('setImage called now');
    gsReference_awesome
      .child('Asher/emo.jpg')
      .getDownloadURL()
      .then(url => {
        this.setState({ url });
        console.log('image promise called');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

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
    this.setImage();
    // this.setDb();
    this.setState({ imageArray: getImages() });
  }

  render() {
    console.log(this.state.url);
    return (
      <div>
        <NavBar></NavBar>
        <Image url={`${this.state.url}`} alt={'fart'} />
        {/* <MainGallery>
          {this.state.imageArray.map(item => (
            <Image url={this.state.url} item={item} id={item._id} />
          ))}
        </MainGallery> */}
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
