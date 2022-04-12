import { getAuth } from 'firebase/auth';
import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth();

const Login = () => {
    const [SignInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        SignInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h3>Please Login Now</h3>
            <div style={{margin:'10px'}}>
            <button onClick={handleGoogleSignIn}>Goggle Sign in</button>
            </div>
            <form>

                <input type="email" name="" id="" placeholder='enter your email' /><br />

                <input type="password" name="" id="" placeholder='enter your password' /><br /> <br />

                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;