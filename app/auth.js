import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebaseConfig'; // Ensure you have initialized Firebase in this file

const auth = getAuth(app);

// Register a new user
export const registerUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

// Log in a user
export const loginUser = async (email, password) => {
    try {
        // Correct: use the imported signInWithEmailAndPassword function with auth as the first argument
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get the current authenticated user
export const getUser = () => {
    return auth.currentUser;
};

// Log out a user
export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error logging out:', error);
    }
};