// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvqAsIlE26OERxo0hd_2_v7Q35zIPfj98",
  authDomain: "chatapp-e1abf.firebaseapp.com",
  projectId: "chatapp-e1abf",
  storageBucket: "chatapp-e1abf.appspot.com",
  messagingSenderId: "7234609557",
  appId: "1:7234609557:web:1fe0d8bc3a131133aed69c",
  measurementId: "G-WZ53NB27JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);