import React, { useContext } from "react";
import image from '../assets/hacker.png';
import logo from '../assets/logo-black.svg';
import logo1 from '../assets/logo-white.svg';
import { ThemeContext } from "./Theme";


const PhotoCurl = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="my-24 max-w-8xl w-full flex flex-col gap-8 items-center justify-center h-[fit-content] overflow-hidden">
            <div className="relative flex flex-wrap w-full max-w-[100vw] items-center justify-evenly z-40">
                <div className="bg-[#02641C] justify-self-start w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] absolute -left-[18%] md:left-[8%] top-4 md:top-8 rounded-sm p-2 md:p-4 -rotate-12 z-20">
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between`}>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
                    </div>
                    <div className={`${theme ? "border-black" : "border-white"} border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm p-2 md:p-4 absolute top-0">
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between`}>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
                    </div>
                    <div className={`${theme ? "border-black" : "border-white"} border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm p-2 md:p-4 rotate-12 absolute -right-[18%] md:right-[8%] top-4 md:top-8">
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between`}>
                        <h1 className="text-[6px] md:text-[12px]">AVALANCHE</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                    </div>
                    <div className={`${theme ? "border-black" : "border-white"} border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="mt-[32%] md:mt-[22%] h-8 w-36">
                {theme ? (
                    <img src={logo1} alt="hacker" className="h-full w-full object-cover" />
                ) : (
                    <img src={logo} alt="hacker" className="h-full w-full object-cover" />
                )}
            </div>

            <div className="relative flex flex-wrap items-center w-full justify-evenly -mt-2 md:mt-8">
                <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4 rotate-12 absolute -top-4 md:-top-8 -left-[18%] md:left-[8%]">
                    <div className={`${theme ? "border-black" : "border-white"} border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between`}>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">AVALANCHE</h1>
                    </div>
                </div>

                <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4">
                <div className={`${theme ? "border-black" : "border-white"} border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between`}>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">ARBITRUM</h1>
                    </div>
                </div>

                <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4 -rotate-12 absolute -top-4 md:-top-8 -right-[18%] md:right-[8%]">
                <div className={`${theme ? "border-black" : "border-white"} border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]`}>
                        <img src={image} alt="hacker" className="w-full h-full object-cover" />
                    </div>
                    <div className={`${theme ? "text-black" : "text-white"} font-wallpoet flex items-center justify-between rotate-180`}>
                        <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
                        <h2>O</h2>
                        <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PhotoCurl;