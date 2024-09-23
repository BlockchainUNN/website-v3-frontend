import React from "react";
import arrow from "../../assets/icons/rightarrow.svg";
import winner from "../../assets/winner.png";

const EventSchedule = () => {
    return (
        <div className="bg-black px-4 md:px-[4rem] py-12 flex flex-col items-center">
            <h1 className="text-white text-[30px] font-bold mb-8">Event Schedule</h1>

            <div className="w-full md:w-[80%] flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 1</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Mon 21st October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Online Hackathon officially starts with workshops from sponsors.
                            </h2>
                        </div>
                    </div>
                    <img src={arrow} alt="" className=" rotate-90 mb-6 md:mb-0 md:rotate-0" />
                    <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 2</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Tue 22nd October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Online Hackathon day (2) two continues with the hackers and their teams.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 3</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Wed 23rd October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Admissions to all registered participants into the hacker house for the physical phase.
                            </h2>
                        </div>
                    </div>
                    <img src={arrow} alt="" className="rotate-90 mb-6 md:mb-0 md:rotate-0" />
                    <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 4</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Thur 24th October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Physical Hackathon day (2) two continues with hackers rounding up.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-full md:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 5</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Fri 25th October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Judges will review and judge, and the top 10 projects get to do a physical presentation.
                            </h2>
                        </div>
                    </div>
                    <img src={arrow} alt="" className="rotate-90 mb-6 md:mb-0 md:rotate-0" />
                    <div className="relative w-full md:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
                        <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">DAY 6</p>
                        <div className="w-full flex flex-col items-start justify-center mt-3">
                            <p className="text-black font-light text-[10px]">Sat 26th October, 2024</p>
                            <h2 className="text-black font-semibold text-[20px]">
                                Conference 3.0 grand finale event where the winners will be announced.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-[6rem] flex flex-col items-center justify-center w-full">
                <h1 className="text-white text-[25px] text-center md:text-[30px] font-bold mb-8">
                    Community Achievements since 2.0
                </h1>

                <div className="w-full flex flex-col gap-6 items-center justify-center">
                    <div className="grid grid-cols-1  md:flex items-center w-full gap-6 justify-center ">
                        <div className="relative w-auto h-[416px]">
                            <img src={winner} alt="winner" className="w-full h-full object-cover" />
                            <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                                One of our Devs won $3000
                            </p>
                        </div>
                        <div className="relative w-auto h-[416px]">
                            <img src={winner} alt="winner" className="w-full h-full object-cover" />
                            <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                                One of our Devs won $3000
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  md:flex items-center w-full gap-6 justify-center ">
                        <div className="relative w-auto h-[416px]">
                            <img src={winner} alt="winner" className="w-full h-full object-cover" />
                            <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                                One of our Devs won $3000
                            </p>
                        </div>
                        <div className="relative w-auto h-[416px]">
                            <img src={winner} alt="winner" className="w-full h-full object-cover" />
                            <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                                One of our Devs won $3000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventSchedule;