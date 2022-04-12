// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF4kgPhRS-oownlDnVahLsN4-MZ0geI4U",
  authDomain: "genius-car-services-e3a95.firebaseapp.com",
  projectId: "genius-car-services-e3a95",
  storageBucket: "genius-car-services-e3a95.appspot.com",
  messagingSenderId: "924398285814",
  appId: "1:924398285814:web:f42de8faf96d2759570dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;