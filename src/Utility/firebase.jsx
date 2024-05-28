import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qpPpeXd5PK8OLAuoJbE0pIu3-vrR1zI",
  authDomain: "clone-375ad.firebaseapp.com",
  projectId: "clone-375ad",
  storageBucket: "clone-375ad.appspot.com",
  messagingSenderId: "1007298864691",
  appId: "1:1007298864691:web:d4d35771bd43111a4ae546",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db =app.firestore();
