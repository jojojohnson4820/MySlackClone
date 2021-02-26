import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAF2WPZ7gOus3vQjX4ixiWYUgP95zQ_ySQ",
    authDomain: "slack-clone-bf9df.firebaseapp.com",
    projectId: "slack-clone-bf9df",
    storageBucket: "slack-clone-bf9df.appspot.com",
    messagingSenderId: "769790252042",
    appId: "1:769790252042:web:a8da2e68ff5b9ffa50fbf3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  export default db;