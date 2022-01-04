import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR2O7NtVmrzb0L5FBVeTqt4CYvgoaj3h4",
  authDomain: "devschat-6a6e2.firebaseapp.com",
  projectId: "devschat-6a6e2",
  storageBucket: "devschat-6a6e2.appspot.com",
  messagingSenderId: "125964131490",
  appId: "1:125964131490:web:ea3902597f70e4c5d00bfb",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
