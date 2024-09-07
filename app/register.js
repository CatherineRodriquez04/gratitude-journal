import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from './auth'; 

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to track error messages
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors before a new attempt

        const result = await registerUser(email, password);

        if (result.success) {
            // Navigate to the main screen/dashboard after successful registration
            router.push('/mainScreen');
        } else {
            // Set the error message if registration fails
            setError(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col font-primary text-[25px] items-center space-y-4">
            <div>
                <p className='font-primary text-gray-500 text-[28px] leading-snug'>Set up your account details here!</p>
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
                placeholder="Create Password"
                className="border border-gray-300 p-2 px-4 rounded"
            />
            <button type="submit" className="bg-[#8E62DB] text-white text-[25px] py-0.5 px-2 rounded hover:scale-110">
                Start Journey
            </button>

            {/* Display error message if it exists */}
            {error && <p className="text-[#8E62DB] mt-2">{error}</p>}
        </form>
    );
}