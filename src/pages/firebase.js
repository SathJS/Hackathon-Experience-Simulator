
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASYOv0tyg-80m-tgnvJuCXJxTjM7hPgWY",
  authDomain: "hackathon-hub-a3bdb.firebaseapp.com",
  projectId: "hackathon-hub-a3bdb",
  storageBucket: "hackathon-hub-a3bdb.appspot.com",
  messagingSenderId: "144961241775",
  appId: "1:144961241775:web:f765aec8b6cb536316ca5a"

  };
  
  
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;



