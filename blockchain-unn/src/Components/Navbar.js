import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import Logo from '../assets/logo.svg';
import { ThemeContext } from './Theme';

const Navbar = () => {
    const [active, setActive] = useState('Home');

    const navItems = ['Home', 'About', 'Community', 'Blog', 'Team', 'Events'];
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme ? "bg-gradient-to-b from-[#000] to-[#0E0E0E] shadow text-[#B2B2B2]" : "bg-white"} w-[93%] px-10 py-4 flex flex-row justify-between items-center`}>
            <div className="mt-2 h-8 w-36">
                <img src={Logo} alt="Blockchainunn" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-16 items-center w-[60%]">
                <ul className="flex gap-8">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className="relative cursor-pointer"
                            onClick={() => setActive(item)}
                        >
                            <Link to={`/${item.toLowerCase()}`} className="block"> {/* Wrap the Link inside the li */}
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
        </div>
    );
}

export default Navbar;