import React, { Component } from 'react';
import MainGallery from './mainGallery';
import Image from './image';
import NavBar from './navBar';
// import getImages from '../services/imagesService';
import firebase from '../firebase.js';

const storage = firebase.storage();
// const gsReference_awesome = storage.refFromURL(
//   'gs://family-gallery-d94d4.appspot.com/'
// );
const db = firebase.database();
const dbRef = db.ref().child('images');

class Home extends Component {
  state = {
    imageArray: [
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
    this.state.imageArray.forEach(item => {
      storage
        .ref(`Asher/`)
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

  setDb() {
    console.log('setDb called');
    dbRef.set('gary');
  }

  componentDidMount() {
    // dbRef
    //   .once('value')
    //   .then(snapshot => this.setState({ imageArray: snapshot.val() }))
    //   .catch(err => console.log(err));
    this.setImage();
    // this.setDb();
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

  render() {
    console.log(this.state.url);
    return (
      <div>
        <NavBar></NavBar>
        {/* <Image url={this.state.url} alt={'fart'} /> */}
        <MainGallery>
          {this.state.url.map((item, index) => (
            <Image url={item} id={index} key={index} />
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
