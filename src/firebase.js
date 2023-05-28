// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEKi-HNvB_fxa2U4kapItzE1qtgHuerFM",
  authDomain: "trimage-ba0bf.firebaseapp.com",
  projectId: "trimage-ba0bf",
  storageBucket: "trimage-ba0bf.appspot.com",
  messagingSenderId: "155518956002",
  appId: "1:155518956002:web:445105fc00bbb01ec149bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;