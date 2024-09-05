import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from './auth';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            // Navigate to the main screen/dashboard after successful registration
            router.push('/mainScreen');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col font-primary text-[25px] items-center space-y-4">
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
            <button type="submit" className="bg-[#8E62DB] text-white px-2 py-0.5 rounded hover:scale-110">
                Start Journey
            </button>
        </form>
    );
}