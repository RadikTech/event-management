import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState(''); // State for user's name
    const [email, setEmail] = useState(''); // State for user's email
    const [password, setPassword] = useState(''); // State for user's password
    const navigate = useNavigate(); // Used for navigation to the login page after registration

    const handleRegister = (e) => {
        e.preventDefault();

        // Fetch existing users or initialize an empty array
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email is already registered
        const existingUser = storedUsers.find((user) => user.email === email);
        if (existingUser) {
            toast.error('Email is already registered!');
            return;
        }

        // Add the new user to the list
        const newUser = { name, email, password };
        storedUsers.push(newUser);

        // Save updated user list back to localStorage
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Display a success message and navigate to the login page
        toast.success('Registration successful! Please login.');
        navigate('/login');
    };

    return (
        <form onSubmit={handleRegister} className="m-4 p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Register</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            
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
                Register
            </button>
        </form>
    );
};

export default Register;
