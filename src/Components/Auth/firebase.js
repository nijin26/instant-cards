import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFHOBsqtVh6X9qKN1P82B2j6pAWVwZHYo",
  authDomain: "visiting-card-maker-ea6b0.firebaseapp.com",
  databaseURL: "https://visiting-card-maker-ea6b0.firebaseio.com",
  projectId: "visiting-card-maker-ea6b0",
  storageBucket: "visiting-card-maker-ea6b0.appspot.com",
  messagingSenderId: "814323317951",
  appId: "1:814323317951:web:b44304e280fa4edd9cda0a",
  measurementId: "G-03LW8BCNS5",
});

const auth = firebase.auth();

export { auth };
