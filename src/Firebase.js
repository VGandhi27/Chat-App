import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYZsf2yzJ6KOWttXl1RVifU3VewjvwmpI",
  authDomain: "trychat-d3941.firebaseapp.com",
  projectId: "trychat-d3941",
  storageBucket: "trychat-d3941.appspot.com",
  messagingSenderId: "794160878370",
  appId: "1:794160878370:web:83d74ddb7ba77c26de4b7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

