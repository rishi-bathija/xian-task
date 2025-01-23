import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState('');

    const handleButtonClick = (buttonName, path) => {
        setActive(buttonName);
        navigate(path);
    };

    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center px-10 py-4 bg-[#043B64] w-full h-[101px] text-white z-50 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img src={Logo} alt="Nexus Ventures Logo" className="w-32 h-auto" />
            </div>

            {/* Buttons Section */}
            <div className="flex items-center space-x-6">
                {!localStorage.getItem('token') && <button className={`text-sm font-medium px-6 py-2 rounded-md hover:underline ${active === 'login' ? 'bg-white text-[#043B64]' : 'hover:underline'}`} onClick={() => handleButtonClick('login', '/login')}
                >Login</button>}
                {!localStorage.getItem('token') && <button className={`text-sm font-medium px-6 py-2 rounded-md ${active === 'signup' ? 'bg-white text-[#043B64]' : 'hover:underline'}`} onClick={() => handleButtonClick('signup', '/register')}
                >
                    Sign Up
                </button>}
                {localStorage.getItem('token') && <button className="text-sm font-medium hover:underline bg-white text-[#043B64] px-6 py-2 rounded-md" onClick={() => {
                    localStorage.removeItem('token');
                    setActive('signup')
                    navigate('/register');
                }}
                >
                    Logout
                </button>}
            </div>
        </div>
    )
}

export default Navbar
