import firebase from "firebase/compat/app"
import "firebase/auth"
import "firebase/database"

const firebaseUtil = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})



export const auth = firebaseUtil.auth()
export const firebaseDB = firebaseUtil.database()
export const googleProvider= new firebase.auth.GoogleAuthProvider()
export default firebaseUtil

