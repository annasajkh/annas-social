import { Database, getDatabase } from "firebase/database";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { browserSessionPersistence, GoogleAuthProvider, setPersistence, type Auth, type User } from "firebase/auth";

import { getAuth } from "firebase/auth";


//it's okay to expose this don't worry https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
const firebaseConfig : { [key: string]: string } = {
  apiKey: "AIzaSyDkmbAje171F3Xd-ytt8VrmmG6UwzgqOL4",
  authDomain: "annassocial-79c35.firebaseapp.com",
  projectId: "annassocial-79c35",
  storageBucket: "annassocial-79c35.appspot.com",
  messagingSenderId: "554855386365",
  appId: "1:554855386365:web:39df69a30057a8c1278294",
  measurementId: "G-RQRTWRDFGP",

  databaseURL: "https://annassocial-79c35-default-rtdb.firebaseio.com/",
};


const app : FirebaseApp = initializeApp(firebaseConfig);

export const auth : Auth = getAuth(app);
export const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();
export const database : Database = getDatabase(app);


setPersistence(auth, browserSessionPersistence);