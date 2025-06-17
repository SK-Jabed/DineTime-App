// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4QQKNMUXGzKobunTMgxvJyXL2mFEx_Sk",
  authDomain: "dine-time-2.firebaseapp.com",
  projectId: "dine-time-2",
  storageBucket: "dine-time-2.firebasestorage.app",
  messagingSenderId: "854974215455",
  appId: "1:854974215455:web:fedff194785edabd292c2a",
  measurementId: "G-KLQ7GTX9NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);