import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9nr0e2WW_KHBCy8fyfdhcf8oQpVOhJFQ",
  authDomain: "la-whiskeria.firebaseapp.com",
  projectId: "la-whiskeria",
  storageBucket: "la-whiskeria.appspot.com",
  messagingSenderId: "426941729560",
  appId: "1:426941729560:web:41ff95c3247f41976c6c6d",
  measurementId: "G-VBTYQWZ5XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
