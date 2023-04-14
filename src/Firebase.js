// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbiUUebReAi4kLzTG0ScFy0rssdb0yAZM",
  authDomain: "pcworld-5331b.firebaseapp.com",
  projectId: "pcworld-5331b",
  storageBucket: "pcworld-5331b.appspot.com",
  messagingSenderId: "149489945002",
  appId: "1:149489945002:web:525b0aaede68bbe180c3d3",
  measurementId: "G-93JQENDZZ3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export {auth , googleProvider , firebase};

export default db;