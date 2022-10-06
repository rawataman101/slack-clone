import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWMRch_Pzfb36G5vPRLJsblduc1_-Fgcg",
  authDomain: "aman-75e29.firebaseapp.com",
  databaseURL: "https://aman-75e29.firebaseio.com",
  projectId: "aman-75e29",
  storageBucket: "aman-75e29.appspot.com",
  messagingSenderId: "875371602554",
  appId: "1:875371602554:web:40dfa674cf60f9ef3c11c3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
