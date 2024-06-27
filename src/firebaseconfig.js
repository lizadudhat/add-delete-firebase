// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDz0XFJTB2rs_cA0IR5xbZKXn_RzM5dV4Y",
  authDomain: "fir-firestore-29efb.firebaseapp.com",
  projectId: "fir-firestore-29efb",
  storageBucket: "fir-firestore-29efb.appspot.com",
  messagingSenderId: "893847334017",
  appId: "1:893847334017:web:bd5f5879f82a2434817180",
  measurementId: "G-5F3TTEKY2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app