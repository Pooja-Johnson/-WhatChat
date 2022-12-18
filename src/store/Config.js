//import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
//import "firebase/auth"
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

const app = firebase.initializeApp ({
  apiKey: "AIzaSyB1a4zIyfkPgRNSe7GsNvy4mk-HAtHLcUY",
  authDomain: "whatchat-eb1e2.firebaseapp.com",
  projectId: "whatchat-eb1e2",
  storageBucket: "whatchat-eb1e2.appspot.com",
  messagingSenderId: "600117262466",
  appId: "1:600117262466:web:7421190983248b302d9c9b"
});

export default app;