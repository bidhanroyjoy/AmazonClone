import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGvcL3ad74fT2L6QexL6NTOHEeYpvEkyc",
    authDomain: "clone-7faf1.firebaseapp.com",
    projectId: "clone-7faf1",
    storageBucket: "clone-7faf1.appspot.com",
    messagingSenderId: "1044108210636",
    appId: "1:1044108210636:web:1a5a62e4a9cc667a0eed69",
    measurementId: "G-887YNEXJ50"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  export {db, auth};