import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row md:mt-2 justify-between items-center">
                {/* Brand */}
                <Link className="text-2xl font-bold text-white" to="/">EventApp</Link>
                
                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link className="hover:text-gray-300" to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-300" to="/create-event">Create Event</Link>
                            </li>
                            <li>
                                <button 
                                    className="hover:text-gray-300" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link className="hover:text-gray-300" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-300" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
