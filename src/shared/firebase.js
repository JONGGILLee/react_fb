import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnPEUbe34P3Uai7BBl6NYAzZMPPYA0lwo",
  authDomain: "react-fb-bcca1.firebaseapp.com",
  projectId: "react-fb-bcca1",
  storageBucket: "react-fb-bcca1.appspot.com",
  messagingSenderId: "948554468946",
  appId: "1:948554468946:web:5887cbadb1c8f3cac1d98b",
  measurementId: "G-TP6TE5JV1T",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
