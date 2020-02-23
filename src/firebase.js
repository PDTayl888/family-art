import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAB_iJ-z7EW94q9Cr0Lx3FN-1hQlqEp9z4',
  authDomain: 'family-gallery-d94d4.firebaseapp.com',
  databaseURL: 'https://family-gallery-d94d4.firebaseio.com',
  projectId: 'family-gallery-d94d4',
  storageBucket: 'family-gallery-d94d4.appspot.com',
  messagingSenderId: '78423075896',
  appId: '1:78423075896:web:d7118ef90d0521b8db8acd',
  measurementId: 'G-LJD15CVNN7'
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
