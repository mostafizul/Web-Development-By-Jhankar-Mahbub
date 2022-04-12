import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
import { getAuth,signOut  } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth();
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/register">Register</Link>
            <span>{user?.displayName}</span>
            {
             user?.uid ? <button onClick={() =>signOut(auth)}>Sign Out</button>
             :
            <Link to="/login">Login</Link>
            }
            </nav>
        </div>
    );
};

export default Header;