// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKLIHv7Qv7Jdpp6Rtg3gXreaXFUe0EYao",
  authDomain: "daily-report-f753c.firebaseapp.com",
  projectId: "daily-report-f753c",
  storageBucket: "daily-report-f753c.firebasestorage.app",
  messagingSenderId: "95086019739",
  appId: "1:95086019739:web:7d75e1689361a0c8b1723e",
  measurementId: "G-WR9S9T9FRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
