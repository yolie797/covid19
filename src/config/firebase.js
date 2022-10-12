// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaDTmNi2BNxe90hyEpud6ArO_phW9vO9I",
  authDomain: "covid19app-2e92a.firebaseapp.com",
  projectId: "covid19app-2e92a",
  storageBucket: "covid19app-2e92a.appspot.com",
  messagingSenderId: "627793783774",
  appId: "1:627793783774:web:064874bc32e4a865c60b4f",
  measurementId: "G-1KXFZF4QGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);