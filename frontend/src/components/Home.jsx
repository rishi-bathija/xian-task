import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in by verifying the token
        const token = localStorage.getItem('token');
        if (!token) {
            // If no token, redirect to the login page
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center flex-grow h-screen">
            <h2 className="text-3xl font-boldf">Welcome to the Home Page!</h2>
            <p className="text-gray-700 mt-4">
                You have successfully logged in. Explore the features of the app!
            </p>
        </div>
    )
}

export default Home
