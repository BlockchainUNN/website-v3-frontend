import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch.js";
import LogoBlack from '../assets/logo-black.svg';
import LogoWhite from '../assets/logo-white.svg';
import { ThemeContext } from './Theme.js';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'About', 'Community', 'Blog', 'Team', 'Events'];
    const { theme } = useContext(ThemeContext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`${theme ? "bg-dark-mode shadow text-[#B2B2B2]" : "bg-white"} w-[95%] rounded-md px-4 md:px-10 py-4 flex justify-between items-center`}>
            <div className="mt-2 h-8 w-36">
                {theme ? (
                    <img src={LogoWhite} alt="Blockchainunn" className="w-full h-full object-cover" />
                ) : (
                    <img src={LogoBlack} alt="Blockchainunn" className="w-full h-full object-cover" />
                )}
            </div>


            {/* Mobile Menu Toggle Button */}
            <div className="flex gap-4 items-center md:hidden ">
                <ThemeSwitch />
                <div className="" onClick={toggleMobileMenu}>
                    {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer" />}
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-16 items-center  w-[60%]">
                <ul className="flex gap-8">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="relative cursor-pointer"
                            onClick={() => setActive(item)}
                        >
                            <Link to={`/${item.toLowerCase()}`} className="block">
                                <span>{item}</span>
                                {active === item && (
                                    <div className="absolute left-1/4 transform -translate-x-1/2 bottom-[-4px] w-1/2 border-b-2 border-green-600 rounded-sm"></div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    <ThemeSwitch />
                    <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[20px] w-[20px] ${!theme ? 'bg-[#cdf0d7]' : 'bg-[#031f0a]'}`}>
                        <p className="text-[12px] font-semibold">in</p>
                    </div>
                    <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[20px] w-[20px] ${!theme ? 'bg-[#cdf0d7]' : 'bg-[#031f0a]'}`}>
                        <p className="text-[12px] font-semibold">in</p>
                    </div>
                    <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[20px] w-[20px] ${!theme ? 'bg-[#cdf0d7]' : 'bg-[#031f0a]'}`}>
                        <p className="text-[12px] font-semibold">in</p>
                    </div>
                    <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[20px] w-[20px] ${!theme ? 'bg-[#cdf0d7]' : 'bg-[#031f0a]'}`}>
                        <p className="text-[12px] font-semibold">X</p>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute flex flex-col top-12 left-0 w-full bg-white z-10 shadow-lg p-4 ">
                    <FaTimes size={25} onClick={toggleMobileMenu} className="self-end cursor-pointer" />
                    <ul className="flex flex-col gap-4 p-2">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer"
                                onClick={() => {
                                    setActive(item);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <Link to={`/${item.toLowerCase()}`} className="block">
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
