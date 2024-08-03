import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuCheckCircle } from "react-icons/lu";

const Success = () => {
    const navigate = useNavigate();

    // Optionally, redirect the user after a few seconds
    // useEffect(() => {
    //     const timer = setTimeout(() => navigate('/'), 20000);
    //     return () => clearTimeout(timer);
    // }, [navigate]);

    return (
        <div className="container mx-auto p-4 bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <LuCheckCircle className="text-green-600 text-6xl mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Checkout Successful</h2>
                <p className="text-gray-600">Thank you for your purchase! Your order has been placed successfully.</p>
                <p className="text-gray-600 mb-4">Check your Mail for more Details.</p>
                <button
                    className="bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-800 transition duration-300"
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Success;
