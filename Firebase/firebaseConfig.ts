// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration (Replace with your actual config)

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrJDPXlWhgQSqe3Gfi7_0lD4-qQRAQZig",
    authDomain: "smartexpensetracker-1c2cf.firebaseapp.com",
    projectId: "smartexpensetracker-1c2cf",
    storageBucket: "smartexpensetracker-1c2cf.firebasestorage.app",
    messagingSenderId: "579615978124",
    appId: "1:579615978124:web:687c044645edb4d26541a9",
    measurementId: "G-SSE9KZ5ZPK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore database
const auth = getAuth(app); // Authentication

export { db, auth };
