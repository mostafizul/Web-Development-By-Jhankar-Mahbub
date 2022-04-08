import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({})
  const goggleProvider = new GoogleAuthProvider();
  const gihubProvider = new GithubAuthProvider();

  const handleGoogleSignin = () =>{
    signInWithPopup(auth, goggleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
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

    const handleSignOut = ()=>{

      const auth = getAuth();
      signOut(auth).then(() => {
        setUser({});
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    const handleGithubSignin = ()=>{
      signInWithPopup(auth, gihubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
    }
  return (
    <div className="App">
      {
        user.email ?<button onClick={handleSignOut}>Sign Out</button> :
        <div>
          <button onClick={handleGoogleSignin}>Google Sign in</button>
          <button onClick={handleGithubSignin}>Github Sign In</button>
        </div>
      }
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
