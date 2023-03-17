// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZC2XlMUmLDj2bZcsB_RudPHibkZ-6cg",
  authDomain: "futbolinho-login.firebaseapp.com",
  projectId: "futbolinho-login",
  storageBucket: "futbolinho-login.appspot.com",
  messagingSenderId: "1067465565765",
  appId: "1:1067465565765:web:492baf7517514c2c9ba52c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)