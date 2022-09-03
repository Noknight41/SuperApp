import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "superchat-67c4a.firebaseapp.com",
  projectId: "superchat-67c4a",
  storageBucket: "superchat-67c4a.appspot.com",
  messagingSenderId: "547083965643",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider);
};

const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithRedirect(provider);
};

export { auth, firestore, firebase, signInWithGoogle, signInWithFacebook };
