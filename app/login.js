import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, getUser } from './auth'; // Ensure you're importing loginUser correctly

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to track error messages
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors before a new attempt

        try {
            // Attempt to login
            await loginUser(email, password);

            // Check if user data or token is available
            const user = getUser(); // Use getUser to check if user is authenticated

            if (user) {
                // Navigate to the main screen/dashboard after successful login
                router.push('/mainScreen');
            } else {
                setError('No user data available.'); // Handle case where user data is missing
            }
        } catch (error) {
            // Set the error message if login fails
            setError('Incorrect email or password.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex font-primary text-[25px] flex-col items-center space-y-4">
            <div>
                <p className='font-primary text-gray-500 text-[28px] leading-snug'>Entering your daily journal - almost there!</p>
            </div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border border-gray-300 p-2 px-4 rounded"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border border-gray-300 p-2 px-4 rounded"
            />
            <button type="submit" className="bg-[#8E62DB] text-white text-[25px] py-0.5 px-2 rounded hover:scale-110">
                Let&apos;s Reflect
            </button>

            {/* Display error message if it exists */}
            {error && <p className="text-[#8E62DB] mt-2">{error}</p>}
        </form>
    );
}