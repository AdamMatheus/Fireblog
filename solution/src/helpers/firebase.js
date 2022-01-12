import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6X6DFyIifzJawwW_fvgt9Z_c9t5hmfsA",
  authDomain: "fireblog-8d9ff.firebaseapp.com",
  projectId: "fireblog-8d9ff",
  storageBucket: "fireblog-8d9ff.appspot.com",
  messagingSenderId: "2221562996",
  appId: "1:2221562996:web:d039379f1aa02debdac521",
  measurementId: "G-WGNL8CZLTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider).then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })
}
