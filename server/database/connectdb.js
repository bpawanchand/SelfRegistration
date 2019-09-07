// const config = require('config');
const firebase = require('firebase');
const firebaseConfig = {
  apiKey: 'AIzaSyChvYeZAM-7k-61Q61h-NtZ0Za2riWhRS8',
  authDomain: 'selfregistration-2c727.firebaseapp.com',
  databaseURL: 'https://selfregistration-2c727.firebaseio.com',
  projectId: 'selfregistration-2c727',
  storageBucket: '',
  messagingSenderId: '179105549778',
  appId: '1:179105549778:web:4b9b5f17acf0f49ffc0c0b'
};
// const appRef = config.get('firebaseConfig');

const rootRef = firebase.initializeApp(firebaseConfig);

module.exports = rootRef;
