import React, { useState } from 'react'
import LoginImage from "../assets/images/Login.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://xian-task-backend.vercel.app/api/auth/login', formData);
            console.log('login success', response.data);
            navigate('/home');
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex justify-center items-center bg-white">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden my-[100px]">
                <div className="grid grid-cols-2">
                    {/* Left Side */}
                    <div className="flex items-center justify-center">
                        <img
                            src={LoginImage}
                            alt="Placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="p-8 bg-[#043B64] text-white ml-[-30px]">
                        <h2 className="text-2xl font-bold text-center mb-6 ">
                            Login
                        </h2>
                        <p className="text-center text-sm mb-6">
                            Fill in your credentials and click on the the Login button
                        </p>

                        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
                            {/* Input Fields */}
                            <label htmlFor="email">
                                <p>Email Address</p>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                <p>Password</p>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </label>
                            {/* Terms and Conditions */}
                            {/* <div className="flex items-center space-x-2 relative">
                                <p className='absolute right-0'>Forgot password?</p>
                            </div> */}

                            {/* Buttons */}
                            <div className="space-y-2 flex gap-4">
                                <button
                                    type="submit"
                                    className="bg-white text-[#043B64] font-medium px-6 py-2 rounded shadow-md"
                                >
                                    Login
                                </button>
                            </div>
                            <p onClick={() => navigate('/register')} className='cursor-pointer'>Don’t have an account? Sign Up</p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
