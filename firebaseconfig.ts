// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-QbG695Eyo1vwkZ-D9Ij3cULt8oFIcI",
  authDomain: "gruppe3hka.firebaseapp.com",
  projectId: "gruppe3hka",
  storageBucket: "gruppe3hka.appspot.com",
  messagingSenderId: "874067249902",
  appId: "1:874067249902:web:e7c9ab361dff03d52f01ff",
  measurementId: "G-11W8Z916BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);