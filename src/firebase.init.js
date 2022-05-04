// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9g5ll8lbJpGn4-kl9gBgfXMKpfqFloog",
  authDomain: "manage-inventory-system.firebaseapp.com",
  projectId: "manage-inventory-system",
  storageBucket: "manage-inventory-system.appspot.com",
  messagingSenderId: "161788442863",
  appId: "1:161788442863:web:11ef3c8ebe2774566bc31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;