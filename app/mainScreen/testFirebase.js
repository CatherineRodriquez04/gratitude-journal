import React, { useEffect } from 'react';
import { auth, firestore } from '../firebaseConfig'; // Adjust the import path if necessary

const TestFirebase = () => {
    useEffect(() => {
        // Log Firebase Auth and Firestore instances to the console
        console.log('Firebase Auth initialized:', auth);
        console.log('Firebase Firestore initialized:', firestore);
    }, []);

    return <div></div>;
};

export default TestFirebase;