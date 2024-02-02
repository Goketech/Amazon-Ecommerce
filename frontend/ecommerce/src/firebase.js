import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyvgb52MVVS8URUZtN9i4tp4egFtIu4b8",
    authDomain: "clone-184ee.firebaseapp.com",
    projectId: "clone-184ee",
    storageBucket: "clone-184ee.appspot.com",
    messagingSenderId: "965350399265",
    appId: "1:965350399265:web:1711175259b415c46cf260",
    measurementId: "G-PV27HBNB68"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };