import React from "react";
import Logo from "../assets/images/logo.png";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/insta.png";
import Facebook from "../assets/images/fb.png";
import Skype from "../assets/images/skype.png";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#043B64] text-white py-10">
                <div className="mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center w-11/12 max-w-7xl space-y-8 lg:space-y-0">
                    {/* Left Section */}
                    <div className="flex flex-col space-y-4 w-full lg:w-1/3">
                        <img src={Logo} alt="Nexus Ventures Logo" className="w-40" />
                        <p className="text-sm leading-relaxed max-w-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
                            eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
                        </p>
                    </div>

                    {/* Middle Section */}
                    <div className="ml-20 flex flex-col space-y-4 w-full lg:w-1/3">
                        <h4 className="font-bold text-lg">Important Links</h4>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col space-y-4 w-full lg:w-1/3">
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-3">
                            <a href="#">
                                <img src={Facebook} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="Instagram" className="w-8 h-8" />
                            </a>
                            <a href="#">
                                <img src={Linkedin} alt="Facebook" className="w-8 h-8" />
                            </a>
                            <a href="#">
                                <img src={Skype} alt="WhatsApp" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white mt-8 pt-4 text-center text-sm w-[90%] mx-auto">
                    Copyright © 2025. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
