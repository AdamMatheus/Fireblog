import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database";

const firebaseUtil=firebase.initializeApp({
  apiKey: "AIzaSyC2m9lxuDdxRiwDuLVORxYNkfmjxnhq-9Y",
  authDomain: "fireblog-2february.firebaseapp.com",
  projectId: "fireblog-2february",
  storageBucket: "fireblog-2february.appspot.com",
  messagingSenderId: "378922958027",
  appId: "1:378922958027:web:246b46357024421fd7ef4e"
});

export default firebaseUtil;

export const auth=firebaseUtil.auth();
export const firebaseDB= firebaseUtil.database();
export const googleProvider=new firebase.auth.GoogleAuthProvider();

// Initialize Firebase
