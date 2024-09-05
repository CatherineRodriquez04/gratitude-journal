import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdbuAsM_6UTY8ynwYkVDi9QeAKd9wF3DU",
    authDomain: "gratitude-journal-cat.firebaseapp.com",
    projectId: "gratitude-journal-cat",
    storageBucket: "gratitude-journal-cat.appspot.com",
    messagingSenderId: "532483166364",
    appId: "1:532483166364:web:b237772fbc857335f99d59",
    measurementId: "G-64XVZRWDGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };