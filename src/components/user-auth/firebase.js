// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBXJ4BkfJq75CeyUXTzwCsGPBmRMx_sE40",

  authDomain: "coffee-world-f4a3f.firebaseapp.com",

  projectId: "coffee-world-f4a3f",

  storageBucket: "coffee-world-f4a3f.appspot.com",

  messagingSenderId: "108506659065",

  appId: "1:108506659065:web:ea6bf6ea278d36584fca28",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

