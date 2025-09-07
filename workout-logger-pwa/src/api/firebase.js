// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaEanPlXY0ZyckXR6aa_KOazflTUm6dY4",
  authDomain: "workoutlogger-3625e.firebaseapp.com",
  projectId: "workoutlogger-3625e",
  storageBucket: "workoutlogger-3625e.appspot.com",
  messagingSenderId: "96103059936",
  appId: "1:96103059936:web:081be3bf3159dbfca51b85",
  measurementId: "G-EZHHK94XET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };