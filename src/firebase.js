import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU4QV60QJ3DGB-k8Vb8bpe61OGxhh6dPE",
  authDomain: "chatter-beb4b.firebaseapp.com",
  projectId: "chatter-beb4b",
  storageBucket: "chatter-beb4b.appspot.com",
  messagingSenderId: "557015556382",
  appId: "1:557015556382:web:f65b2eefeb9a9b220fa90f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
