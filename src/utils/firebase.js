// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDybRgOP_SscQq7KLU4-cQqdSH_GhbWsbE",
  authDomain: "net-gpt-cln.firebaseapp.com",
  projectId: "net-gpt-cln",
  storageBucket: "net-gpt-cln.firebasestorage.app",
  messagingSenderId: "254071066548",
  appId: "1:254071066548:web:111c166e21f7509a57ace1",
  measurementId: "G-PPYV7TLR99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

