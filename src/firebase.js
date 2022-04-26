import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuSXWePIyCr0wvq2fPttAsu7LCyXquIaA",
  authDomain: "chatter-a1c17.firebaseapp.com",
  projectId: "chatter-a1c17",
  storageBucket: "chatter-a1c17.appspot.com",
  messagingSenderId: "1087189772618",
  appId: "1:1087189772618:web:a5cd80dcd07a43ed8ab9b3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
