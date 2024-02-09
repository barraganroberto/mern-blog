// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-72663.firebaseapp.com",
  projectId: "mern-blog-72663",
  storageBucket: "mern-blog-72663.appspot.com",
  messagingSenderId: "1047829767576",
  appId: "1:1047829767576:web:87a953fd0b4650bf1b37ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);