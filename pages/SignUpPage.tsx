import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../App';

const SignUpPage: React.FC = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd create a new user here
        login();
        navigate('/dashboard');
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-sm">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h1>
                <form onSubmit={handleSignUp} className="space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" required />
                    </div>
                    <button type="submit" className="w-full bg-secondary text-white font-bold py-3 rounded-lg text-lg hover:bg-secondary-hover transition-all duration-300">
                        Create Account
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary hover:underline">
                        Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
