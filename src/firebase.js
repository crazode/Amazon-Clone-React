// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCeAlCU_mAKTsEUUyywa40qoONoInm2usI",
    authDomain: "clone-b8299.firebaseapp.com",
    databaseURL: "https://clone-b8299.firebaseio.com",
    projectId: "clone-b8299",
    storageBucket: "clone-b8299.appspot.com",
    messagingSenderId: "490646505823",
    appId: "1:490646505823:web:4d79a3adaa3ee447c7ceea",
    measurementId: "G-VE3G4V5ME3"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export{db, auth};