import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA0K8x2JltNCWieRV3P-OK8lAxrC-eErTw",
  authDomain: "crwn-db-a9096.firebaseapp.com",
  databaseURL: "https://crwn-db-a9096.firebaseio.com",
  projectId: "crwn-db-a9096",
  storageBucket: "crwn-db-a9096.appspot.com",
  messagingSenderId: "761904886081",
  appId: "1:761904886081:web:27502424cf4152814531c0",
  measurementId: "G-T0EXK4Q09L"
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;

