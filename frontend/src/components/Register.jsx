import React, { useState } from 'react'
import Image from '../assets/images/Register.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNo: '',
        whatsappNo: '',
        email: '',
        state: '',
        referralCode: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', formData);
            setSuccess(response.data.message);
            console.log('registration success', response.data);
            navigate('/login');
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
                            src={Image}
                            alt="Placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="p-8 bg-[#043B64] text-white ml-[-20px]">
                        <h2 className="text-2xl font-bold text-center mb-6 ">
                            Sign up
                        </h2>
                        <p className="text-center text-sm mb-6">
                            Fill in your credentials and click the Register button.
                        </p>

                        <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
                            {/* Input Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <label>
                                    <p>First Name</p>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                    />
                                </label>
                                <label>
                                    <p>Last Name</p>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                    />
                                </label>
                            </div>
                            <label>
                                <p>Contact No</p>
                                <input
                                    type="text"
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    placeholder="Contact No"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                />
                            </label>
                            <label>
                                <p>WhatsApp No</p>
                                <input
                                    type="text"
                                    name="whatsappNo"
                                    value={formData.whatsappNo}
                                    onChange={handleChange}
                                    placeholder="WhatsApp No"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                />
                            </label>
                            <label>
                                <p>Email Address</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                />
                            </label>
                            <label>
                                <p>State</p>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                />
                            </label>
                            <label>
                                <p>Referral Code</p>
                                <input
                                    type="text"
                                    name="referralCode"
                                    value={formData.referralCode}
                                    onChange={handleChange}
                                    placeholder="Referral Code"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                />
                            </label>
                            <label>
                                <p>Password</p>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
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
                            <label>
                                <p>Confirm Password</p>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                    >
                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </label>

                            {/* Terms and Conditions */}
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label className="text-sm">
                                    I agree to the{' '}
                                    <span className="font-bold">Terms and Conditions</span> and{' '}
                                    <span className="font-bold">Privacy Policy</span>.
                                </label>
                            </div>

                            {/* Buttons */}
                            <div className="space-y-2 flex gap-4">
                                <button
                                    type="submit"
                                    className="bg-[#000000] text-white w-full py-2 rounded shadow-md border border-white"
                                >
                                    Register
                                </button>
                                <button type="button" className="bg-[#043B64] border border-white w-full py-2 rounded" onClick={() => navigate('/login')}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
