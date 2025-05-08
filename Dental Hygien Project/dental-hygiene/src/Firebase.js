// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiAmHreFajxKolL4adZ_94AV7rpPU4vIw",
  authDomain: "denta-vesre.firebaseapp.com",
  projectId: "denta-vesre",
  storageBucket: "denta-vesre.firebasestorage.app",
  messagingSenderId: "842181672106",
  appId: "1:842181672106:web:5fc94ea5edb64f31eb64d3",
  measurementId: "G-81K68BY74D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
