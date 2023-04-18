// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBwPl2_Kt940lRylfqYi5WI5ivpcMHS5Y",
  authDomain: "chat-826b2.firebaseapp.com",
  projectId: "chat-826b2",
  storageBucket: "chat-826b2.appspot.com",
  messagingSenderId: "953387536788",
  appId: "1:953387536788:web:c4b8ed49d3c9fb91d47f81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);

