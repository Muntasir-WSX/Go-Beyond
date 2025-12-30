// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: Import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: Import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: Import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: Import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 