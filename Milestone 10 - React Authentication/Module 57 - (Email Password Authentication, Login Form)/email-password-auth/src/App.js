import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [registered,setRegistered] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [success, setsuccess] = useState('');
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameblur = (event) =>{
    setname(event.target.value);
  }
  const handleEmailblur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordblur = (event) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setError('password should contain at least one special character');
      return;
    }
    setValidated(true);
    setError(' ')
    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        console.log(error);
        setError(error.message);
      });
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        setsuccess("successfully Registered");
        setEmail('');
        setPassword('');
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        /*  const errorCode = error.code;
        const errorMessage = error.message; 
        // .. */
        setError(error.message);

      });
    }
    
    event.preventDefault();
  }
  const handleRegisteredChange = (event) =>{
    setRegistered(event.target.checked);
  }

  const setUserName = ()=>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('updating name');
    }).catch((error) => {
      setError(error.message);
    });
    
  }
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('email verification sent');
  });
  }
  const handelPasswordReset = ()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('reset password sent to your email');

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
 
  return (
    <div className="App">
      <div className="registration w-50 mx-auto my-3">
        <h2 className='text-primary'>{registered ? 'Login': 'Registration'} Form</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      {!registered && <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name </Form.Label>
          <Form.Control type="text" placeholder="Enter name" onBlur={handleNameblur} required />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>}


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailblur} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordblur} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered" />
          </Form.Group>
          <p style={{ color: 'red' }}>{error}</p>
          <p style={{ color: 'green' }}>{success}</p>
          <Button onClick={handelPasswordReset} variant="link">Forgot Password?</Button>
          <Button variant="primary" type="submit">
            {registered?'Login':'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
