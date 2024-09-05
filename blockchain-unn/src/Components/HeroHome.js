import React from "react";
import BlockathonHeader from './BlockathonHeader';
import Navbar from './Navbar';
import image from '../assets/image.png';

const HeroHome = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <BlockathonHeader />
            <Navbar />
            <div className="flex flex-col items-center w-[80%] font-raleway">
                <h1 className="text-green-900 font-extrabold text-[150px]">
                    BLOCKCHAIN
                </h1>
                <div className="flex items-center">
                    <h1 className="text-green-900 font-extrabold text-[150px]">
                        UNN
                    </h1>
                    <div className="flex items-center justify-center bg-gradient-to-r from-green-950 to-green-500 p-4">
                        <p className="text-[50px] text-center w-full text-white border-t border-b border-white px-4 py-4">
                            Learn . Build . Innovate
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-black w-[60%] text-center mb-8">
                <h2 className="text-[20px]">
                    We&apos;re a student community connected to providing members with educational and professional opportunities in the blockchain industry.
                </h2>
            </div>

            <div className="flex gap-4 mb-20">
                <button className="bg-gradient-to-r from-green-950 to-green-500 w-[180px] h-[65px]  rounded-full text-white">
                    Get Started -&gt;
                </button>
                <div className="flex items-center bg-gradient-to-r from-green-950 to-green-500 w-[180px] h-[65px]  rounded-full">
                    <button className="bg-white w-[95%] h-[90%] rounded-full text-green-800">
                        Newsletter
                    </button>
                </div>
            </div>

            <div className="flex gap-2 items-center justify-center bg-white w-full px-16 py-8 text-[60px] mb-4">
                <h2 className="text-black">Accelerate Your Career With</h2>
                <h2 className="text-green-800 font-semibold">BlockchainUNN</h2>
            </div>

            <div className="flex items-center justify-center gap-8 bg-white w-full px-24 py-4">
                <div className="flex flex-col gap-4 items-start p-4 border border-green-500 rounded-md w-[fit-content] mt-6">
                    <h3 className="font-semibold">
                        Community GDP
                    </h3>
                    <div className="relative flex ">
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] object-cover" />
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] absolute left-14 object-cover" />
                        <img src={image} alt="i" className="rounded-full border border-black w-[70px] h-[70px] absolute left-28 object-cover" />
                        <div className="flex items-center justify-center rounded-full p-4  w-[70px] h-[70px] absolute left-[10.5rem] text-[12px] font-wallpoet bg-[#02641C] text-[#2CE85E]">+4000k</div>
                    </div>
                    <h2 className="text-[100px] font-bold mb-0">
                        4000K+
                    </h2>
                    <p className="-mt-8 font-semibold">Active members</p>
                </div>

                <div className="relative">`
                    <div className="bg-[#02641C] rounded-md w-[580px] h-[150px] mb-8"></div>
                    <div className="bg-[#02641C] rounded-md w-[580px] h-[150px]"></div>
                    <div className="absolute rounded-md py-4 px-6 w-[600px] top-[7%] -left-2">
                        <div className="relative flex flex-col gap-4 bg-black rounded-md py-4 px-2 w-[fit-content]">
                            <div className="-ml-6 flex gap-4">
                                <div className="flex flex-col items-center bg-[#02641C] text-[#2CE85E] p-4 w-[160px] h-[120px] rounded-md">
                                    <h2 className="font-semibold text-[40px]">20</h2>
                                    <p>Hackathon Wins</p>
                                </div>
                                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[160px] h-[120px] text-[#2CE85E] rounded-md">
                                    <h2 className="font-semibold text-[40px]">$40k</h2>
                                    <p>Prize Money</p>
                                </div>
                                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[200px] h-[120px] text-[#2CE85E] rounded-md">
                                    <h2 className="font-semibold text-[40px]">50+</h2>
                                    <p>Community Events</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <div className="flex flex-col items-center px-8 py-4  text-[#2CE85E] rounded-md">
                                    <h2 className="font-semibold text-[40px]">
                                        <span style={{ color: 'green' }}>🌍</span> 20+
                                    </h2>
                                    <p>Partners Worldwide</p>
                                </div>
                                <div className="flex flex-col items-start bg-[#02641C] text-[#2CE85E] px-8 py-4  rounded-md">
                                    <h3 className="font-semibold  flex items-center gap-2"><span className="text-[30px]">4</span>Active Sub-Communities</h3>
                                    <div className="flex flex-wrap gap-x-16 gap-y-2 w-[220px]">
                                        <span>
                                            Designers
                                        </span>
                                        <span>
                                            Developers
                                        </span>
                                        <span>
                                            Writers
                                        </span>
                                        <span>
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
    );
}

export default HeroHome;