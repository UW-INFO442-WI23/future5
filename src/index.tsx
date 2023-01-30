import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//import the function from the realtime database module
import { getDatabase } from 'firebase/database';

import firebase from "firebase/compat/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Get a reference to the database service
// const db = getDatabase();
const db = getFirestore()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmolqh8q8BBGWrZKBoxW-sOjCa6Uihzg",
  authDomain: "future5-7a3d2.firebaseapp.com",
  projectId: "future5-7a3d2",
  storageBucket: "future5-7a3d2.appspot.com",
  messagingSenderId: "437088556082",
  appId: "1:437088556082:web:ba572c17fd9b1d4200182b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


export { auth, db };

