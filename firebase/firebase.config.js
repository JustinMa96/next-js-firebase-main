import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_apiKey,
  // authDomain: process.env.NEXT_PUBLIC_authDomain,
  // projectId: process.env.NEXT_PUBLIC_projectId,
  // storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  // messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  // appId: process.env.NEXT_PUBLIC_appId
  apiKey: "AIzaSyApK3NkIUvWJl2b62oABXtZvADJgh6DUCc",
  authDomain: "fir-vercel.firebaseapp.com",
  projectId: "fir-vercel",
  storageBucket: "fir-vercel.appspot.com",
  messagingSenderId: "338029943818",
  appId: "1:338029943818:web:a7f0f07a01c79f6a3353f3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
