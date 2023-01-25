import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import the function from the realtime database module
import { getDatabase } from 'firebase/database';
// Get a reference to the database service
const db = getDatabase();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
