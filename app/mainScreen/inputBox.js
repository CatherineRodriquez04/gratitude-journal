"use client";
import { useState } from 'react';
import { format } from 'date-fns';
import { auth, firestore } from '../firebaseConfig'; // Adjust the path to your Firebase config
import { collection, addDoc } from 'firebase/firestore';

export default function InputBox() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    // Get the current date
    const currentDate = format(new Date(), 'yyyy-MM-dd');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the current user
        const user = auth.currentUser;
        if (!user) {
            console.error('No user is logged in.');
            return;
        }

        try {
            // Save the entry to Firestore
            const docRef = await addDoc(collection(firestore, 'entries'), {
                userId: user.uid,
                text: inputValue,
                date: currentDate
            });
            console.log('Document written with ID: ', docRef.id);

            // Clear input after submission
            setSubmittedValue(inputValue);
            setInputValue('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                {/* Input Box */}
                <div className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border border-gray-300 font-primary p-4 text-[25px] rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter what makes you happy..."
                    />
                    {/* Date displayed beside the input */}
                    <span className="absolute xl:bottom-[0px] bottom-[80px] right-[10px] xl:right-[-110px] font-primary xl:text-[20px] text-[20px] transform xl:-translate-y-1/2 text-gray-500">
                        {currentDate}
                    </span>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-[#8E62DB] font-primary text-white text-[20px] px-4 py-1 rounded-lg hover:bg-[#8E62DB] hover:scale-110"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}