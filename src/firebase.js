import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD8iGbteqEiEAhDLyvBcLWtkFI9aglrpU",
  authDomain: "nutechcnc-29c37.firebaseapp.com",
  projectId: "nutechcnc-29c37",
  storageBucket: "nutechcnc-29c37.appspot.com",
  messagingSenderId: "980717632192",
  appId: "1:980717632192:web:4840a2cae38efe14848b25",
  measurementId: "G-55N7E2GRDD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
