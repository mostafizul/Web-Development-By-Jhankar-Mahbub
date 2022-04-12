import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth();
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Home</h2>
            <p>Current user is: {user? user.displayName :'No body'}</p>
        </div>
    );
};

export default Home;