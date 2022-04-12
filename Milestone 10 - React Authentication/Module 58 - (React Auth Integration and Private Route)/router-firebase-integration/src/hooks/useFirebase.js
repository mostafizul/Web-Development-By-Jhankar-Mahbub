import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'
const auth = getAuth();
const provider = new GoogleAuthProvider();


const useFirebase = () =>{
    const [user,setUser] = useState({});

    useEffect(()=>{
         onAuthStateChanged(auth, user=>{
             setUser(user);
         })
    },[])

    const signWithGoogle = () =>{
        signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    // return [user,setUser]

    return {user, signWithGoogle,handleSignOut}
}

export default useFirebase;