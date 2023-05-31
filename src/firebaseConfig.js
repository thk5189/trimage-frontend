
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBrD7Uc-6MF-XumVlblHPLr26YdtnemXG0",
  authDomain: "authuser-78ee9.firebaseapp.com",
  projectId: "authuser-78ee9",
  storageBucket: "authuser-78ee9.appspot.com",
  messagingSenderId: "934582787113",
  appId: "1:934582787113:web:cd1f64ed2afad9f4119038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app