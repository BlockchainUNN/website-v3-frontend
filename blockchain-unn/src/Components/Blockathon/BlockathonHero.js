import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Theme";
import Hacker from '../../assets/blockathonc.png';
import blockathon from "../../assets/blockathonlogo.png";


const BlockathonHero = () => {
    const { theme } = useContext(ThemeContext);
    const calculateTimeLeft = () => {
        const eventDate = new Date("2024-10-30T00:00:00");
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();
        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-screen">
            <div className="flex flex-col items-center justify-center w-full h-screen relative">
                <img src={Hacker} alt="blockathon" className="w-full h-full object-cover" />

                <div className="absolute top-1/3 flex flex-col gap-4 items-center">
                    <div className="w-[85%] h-[180px] flex items-center justify-center px-4 bg-white">
                        <img src={blockathon} alt="Blockchain" className="w-full h-full" />
                    </div>
                    <h1 className="text-white text-[50px] font-bold ">
                        BlockchainUNN <span className="font-light">Conference</span> 3.0
                    </h1>

                    <div className="flex gap-4 w-[85%] justify-evenly items-center text-white mt-12">
                        <div className="rounded-full px-4 py-4 border border-white w-[300px] h-[75px] flex items-center">
                            <p className="w-full px-2 text-[18px]">
                                3rd Edition, Enugu, Nigeria 21st-26th October
                            </p>
                        </div>
                        <div className="rounded-full px-4 py-4 border border-white w-[300px] h-[75px] flex items-center">
                            <p className="w-full px-2 text-[18px]">
                                Learn . Build . Innovate
                            </p>
                        </div>
                        <div className="rounded-full px-4 py-4 border border-white w-[300px] h-[75px] flex items-center">
                            <p className="w-full px-2 text-[18px]">
                                $3000 Prize pool to be won
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-dark-mode flex px-8 py-4 items-center justify-evenly gap-8 w-full h-[120px]`}>
                <div className={`flex px-8 py-4 items-center justify-evenly gap-8 w-[85%] h-full`}>
                    <div className="flex gap-4 md:items-center md:justify-center text-[0.9rem] md:text-[20px] text-center text-white">
                        <span>
                            <p>
                                DAYS
                            </p>
                            <p className="text-[2rem] font-bold">
                                {timeLeft.days}
                            </p>
                        </span>
                        <span>
                            <p >
                                HOURS
                            </p>
                            <p className="text-[2rem] font-bold">
                                {timeLeft.hours}
                            </p>
                        </span>
                        <span>
                            <p >
                                MINUTES
                            </p>
                            <p className="text-[2rem] font-bold">
                                {timeLeft.minutes}
                            </p>
                        </span>
                        <span>
                            <p>
                                SECONDS
                            </p>
                            <p className="text-[2rem] font-bold">
                                {timeLeft.seconds}
                            </p>
                        </span>
                    </div>

                    <div className="flex gap-4 items-center ">
                        <button className="px-12 py-4 border-white border rounded-md text-white">
                            Register Here
                        </button>
                        <button className="px-12 py-4 bg-gray-200 rounded-md text-black">
                            Join the Hackathon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockathonHero;