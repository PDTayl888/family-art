import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return <h1>HOME !!!!!!!!!!!</h1>;
  }
}

export default Home;

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
