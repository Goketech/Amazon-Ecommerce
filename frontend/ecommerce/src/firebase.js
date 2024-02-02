import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyvgb52MVVS8URUZtN9i4tp4egFtIu4b8",
    authDomain: "clone-184ee.firebaseapp.com",
    projectId: "clone-184ee",
    storageBucket: "clone-184ee.appspot.com",
    messagingSenderId: "965350399265",
    appId: "1:965350399265:web:1711175259b415c46cf260",
    measurementId: "G-PV27HBNB68"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };