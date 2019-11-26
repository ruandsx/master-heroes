import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAWM2UUoLEoPB-n-Y7o9Z6WMxfEzAcEI_Y",
  authDomain: "master-heroes-650ef.firebaseapp.com",
  databaseURL: "https://master-heroes-650ef.firebaseio.com",
  projectId: "master-heroes-650ef",
  storageBucket: "master-heroes-650ef.appspot.com",
  messagingSenderId: "118828790344",
  appId: "1:118828790344:web:b6ed12f73c784c50c15e7d",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

/*
db.ref('users/name').set({
  score: 0,
  percentage: 0,
  time: 0,
})
*/