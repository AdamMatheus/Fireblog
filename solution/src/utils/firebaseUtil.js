import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/database"
import {initializeApp} from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseUtil =initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL:process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId
})



export const auth = getAuth(firebaseUtil)
export const firebaseDB = firebaseUtil.database()
export const googleProvider= new firebase.auth.GoogleAuthProvider()
export default firebaseUtil


