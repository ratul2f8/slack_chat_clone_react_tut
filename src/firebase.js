import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBz4Qa5UofIaKm_erqVR1B5sfW4XeSe_3c",
  authDomain: "react-tutorials-afterwards.firebaseapp.com",
  databaseURL: "https://react-tutorials-afterwards.firebaseio.com",
  projectId: "react-tutorials-afterwards",
  storageBucket: "react-tutorials-afterwards.appspot.com",
  messagingSenderId: "889512125926",
  appId: "1:889512125926:web:1f8c23e3d7943d16bba227",
  measurementId: "G-62TBLXS7FG",
};
firebase.initializeApp(config);

export default firebase;
