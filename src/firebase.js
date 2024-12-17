// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDDUeklmia0ht8vL7r935uweCe7GFREF0",
  authDomain: "capital-rush-ebca8.firebaseapp.com",
  projectId: "capital-rush-ebca8",
  storageBucket: "capital-rush-ebca8.appspot.com",
  messagingSenderId: "455278245780",
  appId: "1:455278245780:web:6ca71a7897fdde73ee4181",
  measurementId: "G-WMQY7WKTRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);