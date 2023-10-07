// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDklAiOI6HXXij1pFV1QjdOVciW7NAW9Xs",
  authDomain: "knowledge-junction-32fe4.firebaseapp.com",
  projectId: "knowledge-junction-32fe4",
  storageBucket: "knowledge-junction-32fe4.appspot.com",
  messagingSenderId: "863548956268",
  appId: "1:863548956268:web:997ff9c52406729ed2c249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;