// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgrphWZngPMu5Lf_c36VN4k6QEjTEheGs",
  authDomain: "pyongbbuproject.firebaseapp.com",
  projectId: "pyongbbuproject",
  storageBucket: "pyongbbuproject.appspot.com",
  messagingSenderId: "735151403083",
  appId: "1:735151403083:web:a0e31216f6fedf15ed5dce",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
