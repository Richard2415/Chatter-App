import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQvklqeF2u0Hf6fyHBYRojVs0dmCSaAsk",
  authDomain: "chatterapp-b268824.firebaseapp.com",
  projectId: "chatterapp-b268824",
  storageBucket: "chatterapp-b268824.appspot.com",
  messagingSenderId: "847294680147",
  appId: "1:847294680147:web:e1881315e01afd4a1d0aa6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
