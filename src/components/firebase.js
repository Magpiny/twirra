import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTMree4d_bhLOMAqkywh7nouAZZwmJQTY",
  authDomain: "twirra1.firebaseapp.com",
  projectId: "twirra1",
  storageBucket: "twirra1.appspot.com",
  messagingSenderId: "116876786622",
  appId: "1:116876786622:web:ddba06789bd55e3eac97ef",
  measurementId: "G-H4SDBWQ0J3"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let db = firebaseApp.firestore();

export default db;
