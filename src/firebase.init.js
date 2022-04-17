// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_fBo-1W50w3lV_PZ2q1cg--g6kNSmWs4",
    authDomain: "snaz-travel.firebaseapp.com",
    projectId: "snaz-travel",
    storageBucket: "snaz-travel.appspot.com",
    messagingSenderId: "356690961435",
    appId: "1:356690961435:web:2b52349942b6b8c6b8c4be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;