import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

	// paste Copied firebaseConfig here 

    apiKey: "AIzaSyDzkjMbzsQMqKRdOhTzWpLn9f7k-HLyHIM",
    authDomain: "text-application-cdca6.firebaseapp.com",
    projectId: "text-application-cdca6",
    storageBucket: "text-application-cdca6.appspot.com",
    messagingSenderId: "418809575530",
    appId: "1:418809575530:web:1667e343aa24ac8f2cb213",
    measurementId: "G-YKCZGXMVTK"
      
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
