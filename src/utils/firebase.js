// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "school-blog-b574f.firebaseapp.com",
  projectId: "school-blog-b574f",
  storageBucket: "school-blog-b574f.appspot.com",
  messagingSenderId: "206181737561",
  appId: "1:206181737561:web:59cbbaff01662ed257bd48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);