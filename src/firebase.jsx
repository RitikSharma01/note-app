import firebase from "firebase";

// Your web app<s Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpvf4B_ZnpJFHhFzveW8Kvj-FyMWCpX9k",
  authDomain: "my-app.firebaseapp.com",
  databaseURL: "https://my-app.firebaseio.com",
  projectId: "my-app",
  storageBucket: "my-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefghijklmnopqrstuvwxyz",
});

const db = firebaseApp.fireStore();

export default db;
