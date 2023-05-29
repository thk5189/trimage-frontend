
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEKi-HNvB_fxa2U4kapItzE1qtgHuerFM",
  authDomain: "trimage-ba0bf.firebaseapp.com",
  projectId: "trimage-ba0bf",
  storageBucket: "trimage-ba0bf.appspot.com",
  messagingSenderId: "155518956002",
  appId: "1:155518956002:web:445105fc00bbb01ec149bb"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export default app;

const app = initializeApp(firebaseConfig);
const auth = getAuth(); // <-- Update this line

export { auth };
export default app;