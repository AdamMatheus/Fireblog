import React ,{useContext,createContext,useEffect,useState} from 'react'
import { auth,googleProvider } from '../utils/firebaseUtil';

const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext)
}

const AuthContextProvider=({children})=> {

  const [currentUser,setCurrentUser]=useState();
  const [loading,setLoading]=useState(true)


  useEffect(() => {
       const unsubscribe=auth.onAuthStateChanged((user)=>{
           setCurrentUser(user);
           setLoading(false)
       })
      return unsubscribe;
          
      
  }, [])

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login (email,password) {
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout() {
        auth.signOut();
    }

    function loginWithGoogle(){
        googleProvider.setCustomParameters({prompt:"select_account"});
        auth.signInWithPopup(googleProvider);

    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);

    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);

    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);

    }

const values={
    signup,
    login,
    logout,
    resetPassword,
    loginWithGoogle,
    currentUser,
    updateEmail,
    updatePassword,
}

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
            
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
