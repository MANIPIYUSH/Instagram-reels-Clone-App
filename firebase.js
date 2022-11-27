// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Rve3AvYSo82NepUKsoq5BeKWcGf7no8",
  authDomain: "instareels-app.firebaseapp.com",
  projectId: "instareels-app",
  storageBucket: "instareels-app.appspot.com",
  messagingSenderId: "895041050567",
  appId: "1:895041050567:web:7ec948f058a5662ef82be2",
  measurementId: "G-93PFJ379EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth();
export {auth};

export default app 