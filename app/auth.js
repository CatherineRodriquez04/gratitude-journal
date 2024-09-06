import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firebaseConfig'; 

const auth = getAuth(app);

// Register a new user
export const registerUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return { success: true };
    } catch (error) {
        let message = '';
        if (error.code === 'auth/email-already-in-use') {
            message = 'Email is already in use. Please use a different email.';
        } else if (error.code === 'auth/weak-password') {
            message = 'Password should be at least 6 characters long.';
        } else {
            message = 'Registration failed. Please try again.';
        }
        return { success: false, message };
    }
};

// Log in a user
export const loginUser = async (email, password) => {
    try {
        // Use the imported Firebase function to log in a user
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in successfully');
    } catch (error) {
        console.error('Error logging in:', error);
        throw new Error(error.message); // Propagate error for further handling
    }
};

// Get the current authenticated user
export const getUser = () => {
    return auth.currentUser; // Firebase method to get the current user
};

// Log out a user
export const logoutUser = async () => {
    try {
        // Use the imported Firebase function to log out a user
        await signOut(auth);
        console.log('User logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
        throw new Error(error.message); // Propagate error for further handling
    }
};