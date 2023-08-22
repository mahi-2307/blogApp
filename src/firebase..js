// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0VS4FNR-bkTcAFfNckIRWT8RArlPeQL8",
  authDomain: "learn-76eee.firebaseapp.com",
  projectId: "learn-76eee",
  storageBucket: "learn-76eee.appspot.com",
  messagingSenderId: "72765052525",
  appId: "1:72765052525:web:328b2c68060829a1965164",
  measurementId: "G-1VFKSNL064",
};

// Initialize Firebase connection
//doesnt gaurantee every other services are available
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 
