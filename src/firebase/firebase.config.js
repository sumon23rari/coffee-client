// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1EIugBg7I_jOmTq_lUvJP3Q4L_kOg1D0",
  authDomain: "coffee-project-4fccf.firebaseapp.com",
  projectId: "coffee-project-4fccf",
  storageBucket: "coffee-project-4fccf.appspot.com",
  messagingSenderId: "732775033209",
  appId: "1:732775033209:web:98973c0d9de12c3fa827a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;