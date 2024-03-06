// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3PfEzfIFA2zFQRE8IVjwsjngK23nilvg",
    authDomain: "jacks-website-2302e.firebaseapp.com",
    projectId: "jacks-website-2302e",
    storageBucket: "jacks-website-2302e.appspot.com",
    messagingSenderId: "554349313089",
    appId: "1:554349313089:web:f266a7a4dcb2d1953d1ac0",
    measurementId: "G-W2N6PJXSST"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /subscribers/{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
