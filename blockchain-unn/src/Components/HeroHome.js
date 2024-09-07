import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import BlockathonHeader from './BlockathonHeader';
import Navbar from './Navbar';
import image from '../assets/image.png';
import { FaArrowRight, FaCode, FaGift, FaPencilAlt, FaPenNib, FaPeopleCarry } from "react-icons/fa";


const HeroHome = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="w-full flex flex-col items-center">
            <BlockathonHeader />
            <div className={`${theme ? "bg-dark-mode " : "bg-transparent"} flex flex-col sm:py-4 items-center w-full font-raleway `}>
            <Navbar />
                <div className="text-center flex flex-col items-center w-[92%] sm:w-[80%] mx-auto">
                    <h1 className="text-green-900 font-[900] text-[50px] sm:text-[150px] ">
                        BLOCKCHAIN
                    </h1>
                    <div className="flex items-center gap-4 ">
                        <h1 className="text-green-900 font-extrabold text-[50px] sm:text-[150px]">
                            UNN
                        </h1>
                        <div className="flex items-center justify-center bg-gradient-to-r from-green-950 to-green-500 p-2 sm:p-4 w-[80%] sm:[50%]">
                            <p className="text-[12px] sm:text-[50px] text-center w-full text-white border-t border-b border-white p-2 sm:p-4">
                                Learn . Build . Innovate
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={` ${theme ? 'text-white' : 'text-black' } w-[80%] sm:w-[50%] text-center mt-2 sm:mt-0 mb-8` }>
                <h2 className="text-[10px] sm:text-[20px]">
                    We&apos;re a student community connected to providing members with educational and professional opportunities in the blockchain industry.
                </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 sm:mb-20">
                <button className="bg-gradient-to-r from-green-950 to-green-500 flex items-center justify-center gap-2 w-[200px] sm:w-[180px] h-[55px] sm:h-[65px]  rounded-full text-white">
                    Get Started <FaArrowRight size={14} />
                </button>
                <div className="flex items-center bg-gradient-to-r from-green-950 to-green-500 w-[150px] sm:w-[180px] h-[55px] sm:h-[65px]  rounded-full">
                    <button className="bg-white w-[95%] h-[90%] rounded-full text-green-800">
                        Newsletter
                    </button>
                </div>
            </div>

            <div className={`${theme ? "bg-dark-mode border-t border-b border-gray-600" : "bg-white border-t border-b border-gray-500"} flex gap-1 sm:gap-2 items-center justify-center w-full p-4 sm:px-16  sm:py-8 text-[14px] sm:text-[60px] mb-2 sm:mb-4 `}>
                <h2 className={`${theme ? 'text-white' : 'text-black'} font-semibold `}>Accelerate Your Career With</h2>
                <h2 className="text-green-800 font-semibold">BlockchainUNN</h2>
            </div>

            <div className={`${theme ? 'bg-dark-mode text-white border-t border-b border-gray-600' : 'bg-white border-t border-b border-gray-500 text-black '} flex sm:flex-row flex-col items-center justify-center gap-8 w-full h-[fit-content] px-6 sm:px-24 py-4`}>
                <div className="flex flex-col gap-4 items-start p-4 border border-green-500 rounded-md w-full sm:w-[40%] mt-6">
                    <h3 className="font-semibold">
                        Community GDP
                    </h3>
                    <div className="relative flex ">
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] object-cover" />
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] absolute left-14 object-cover" />
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] absolute left-28 object-cover" />
                        <div className="flex items-center justify-center rounded-full p-4  w-[70px] h-[70px] absolute left-[10.5rem] text-[12px] font-wallpoet bg-[#02641C] text-[#2CE85E]">+4000k</div>
                    </div>
                    <h2 className="text-[80px] sm:text-[100px] font-bold mb-0">
                        4000K+
                    </h2>
                    <p className="-mt-8 font-semibold">Active members</p>
                </div>

                <div className="relative w-full sm:w-[40%]">
                    <div className="bg-[#02641C] rounded-md w-full h-[160px] mb-8"></div>
                    <div className="bg-[#02641C] rounded-md w-full h-[160px]"></div>
                    <div className="absolute flex flex-col items-center rounded-md py-4 w-full top-0 h-full">
                        <div className="relative flex flex-col gap-4 bg-black rounded-md py-4 px-2 w-[95%] h-full">
                            <div className="-ml-6 flex flex-row gap-4">
                                <div className="flex flex-col items-center bg-[#02641C] text-[#2CE85E] p-4 w-[30%] h-[130px] rounded-md">
                                    <h2 className="font-semibold text-[2rem] lg:text-[40px]">20</h2>
                                    <p className="text-[0.8rem] text-center lg:text-[1rem]">Hackathon Wins</p>
                                </div>
                                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[30%] h-[130px] text-[#2CE85E] rounded-md">
                                    <h2 className="font-semibold text-[2rem] lg:text-[40px]">$40k</h2>
                                    <p className="text-[0.8rem] text-center lg:text-[1rem]">Prize Money</p>
                                </div>
                                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[32%] h-[130px] text-[#2CE85E] rounded-md">
                                    <h2 className="font-semibold text-[2rem] lg:text-[40px]">50+</h2>
                                    <p className="text-[0.8rem] text-center lg:text-[1rem]">Community Events</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-evenly">
                                <div className="flex flex-col items-center px-2 sm:px-8 py-4  text-[#2CE85E] rounded-md">
                                    <h2 className="flex items-center gap-2 font-semibold text-[2rem] lg:text-[40px]">
                                        <span className="text-[2rem]" >🌍</span> 20+
                                    </h2>
                                    <p className="text-[0.8rem] text-center lg:text-[1rem]">Partners Worldwide</p>
                                </div>
                                <div className="flex flex-col items-start bg-[#02641C] text-[#2CE85E] px-4 sm:px-8 sm:py-4 py-2  rounded-md w-[70%] sm:w-[50%] h-[140px]">
                                    <h3 className="font-semibold flex text-[0.6rem] gap-1 sm:text[1.rem] items-center sm:gap-2"><span className="text-[1rem] sm:text-[30px]">4</span>Active Sub-Communities <FaPeopleCarry className="hidden sm:flex" /></h3>
                                    <div className="flex flex-col gap-4 items-start w-full">
                                        <div className="flex flex-col sm-420:flex-row justify-between w-full text-[0.8rem]">
                                            <span className="flex gap-2 items-center  ">
                                                <FaPenNib size={10} /> Designers
                                            </span>
                                            <span className="flex gap-2 items-center ">
                                                <FaCode size={10} /> Developers
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row justify-between w-full text-[0.8rem]">
                                            <span className="flex gap-2 items-center ">
                                                <FaPencilAlt size={10} /> Writers
                                            </span>
                                            <span className="flex gap-2 items-center ">
                                                <FaGift size={10} />
                                                AirdropEdu
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroHome;