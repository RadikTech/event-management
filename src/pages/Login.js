import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../components/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const { login } = useAuth(); // Access the `login` method from `AuthProvider`
    const navigate = useNavigate(); // Used for redirecting after successful login

    const handleLogin = (e) => {
        e.preventDefault();

        // Fetch users stored in localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find matching user
        const user = storedUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            // Generate a fake token for demonstration
            const fakeToken = `fake-token-${user.email}`;
            
            login(fakeToken); // Update authentication state in the context
            toast.success('Login successful!'); // Notify success
            
            navigate('/'); // Redirect to the home/dashboard page
        } else {
            toast.error('Invalid email or password!'); // Notify error
        }
    };

    return (
        <form onSubmit={handleLogin} className="m-4 p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Login</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
    );
};

export default Login;
