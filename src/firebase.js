// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQ6oyXDrHFlk7GrkpacKX6qZGpUxqRNb0",
  authDomain: "tesla-clone-aba16.firebaseapp.com",
  projectId: "tesla-clone-aba16",
  storageBucket: "tesla-clone-aba16.appspot.com",
  messagingSenderId: "139136459331",
  appId: "1:139136459331:web:6699cb109654f0ef27eaf6",
  measurementId: "G-7Z7SRJFXMD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
