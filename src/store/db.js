import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkfqTXnhPw-gj5NNv_s_4J-iZ3nKWOTek",
  authDomain: "apcom-program.firebaseapp.com",
  databaseURL: "https://apcom-program.firebaseio.com",
  projectId: "apcom-program",
  storageBucket: "apcom-program.appspot.com",
  messagingSenderId: "65678257313",
  appId: "1:65678257313:web:f5ec070f544cfa0d4c94e0",
  measurementId: "G-0RWVK1YN12"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
