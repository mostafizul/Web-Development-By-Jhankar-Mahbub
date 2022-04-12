import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFirebase from '../../hooks/useFirebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
           <h2>{user ? user?.displayName : "no one"}</h2> 
        </div>
    );
};

export default Products;