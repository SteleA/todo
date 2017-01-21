import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCiAbA3TD8Qm8AIomTp9jdJT0CJEa_1gms',
  authDomain: 'todo-b1ce8.firebaseapp.com',
  databaseURL: 'https://todo-b1ce8.firebaseio.com',
  storageBucket: 'todo-b1ce8.appspot.com',
  messagingSenderId: '211396195941',
};

firebase.initializeApp(config);
const db = firebase.database();

export default db;
