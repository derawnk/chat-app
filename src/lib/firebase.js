
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-e1abf.firebaseapp.com",
  projectId: "chatapp-e1abf",
  storageBucket: "chatapp-e1abf.appspot.com",
  messagingSenderId: "7234609557",
  appId: "1:7234609557:web:1fe0d8bc3a131133aed69c",
  measurementId: "G-WZ53NB27JB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()