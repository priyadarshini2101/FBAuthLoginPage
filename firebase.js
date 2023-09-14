import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkb6Ko4CjCCcjEUubhc_eVzH9oKtwnHgE",
  authDomain: "fir-auth-article-4d862.firebaseapp.com",
  projectId: "fir-auth-article-4d862",
  storageBucket: "fir-auth-article-4d862.appspot.com",
  messagingSenderId: "1025874908270",
  appId: "1:1025874908270:web:3011beb47a12ca83cd827f",
  measurementId: "G-Y9VW815SD0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };




