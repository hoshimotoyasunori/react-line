import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD3h3LkU5Bs0xfJB7psqPJo22zX2nsstVA",
        authDomain: "line-app-b1760.firebaseapp.com",
        projectId: "line-app-b1760",
        storageBucket: "line-app-b1760.appspot.com",
        messagingSenderId: "1039303592749",
        appId: "1:1039303592749:web:2a67920f818aedd087a1a4"
});


const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };