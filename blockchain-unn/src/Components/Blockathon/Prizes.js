import React from "react";
import gold from "../../assets/icons/gold.svg";
import silver from "../../assets/icons/silver.svg";
import bronze from "../../assets/icons/bronze.svg";
import design from "../../assets/icons/design.svg";
import cash from "../../assets/icons/cash.png";
import winnertag from "../../assets/icons/winnertag.svg";

const Prizes = () => {
    return (
        <div className="bg-dark-mode px-2 md:px-[2rem] xl:px-[4rem] py-12 flex flex-col items-center w-full">
            <h1 className="text-blockathon-green text-[25px] md:text-[80px] font-bold mb-4">PRIZES & RECOGNITION</h1>

            <div className="w-full md:w-[95%] xl:w-[80%] mb-12">
                <div className="grid grid-cols-2 gap-2 items-center">
                    <div className="flex flex-col items-center justify-center border border-blockchain-green rounded-xl h-[350px] md:h-[450px] w-auto bg-black relative">
                        <p className="text-blockathon-green font-semibold text-[25px] -mb-3">Grand Prize</p>
                        <h1 className="text-white font-extrabold text-[25px] md:text-[60px]">8M ($5,000)</h1>
                        <img src={winnertag} alt="winnertag" className=" w-[75px] md:w-[100px] h-[75px] md:h-[100px] scale-150 absolute -top-4 -left-2" />
                        <img src={cash} alt="gold" className="w-[65%] h-[85px] md:h-[150px] scale-150 mt-4" />
                    </div>
                    <div className="w-auto flex flex-col gap-2">
                        <div className="flex flex-col items-center justify-center border border-blockchain-green rounded-xl h-[175px] md:h-[222px] w-auto bg-black">
                            <p className=" text-blockathon-green font-semibold text-[25px] -mb-2">1st Prize</p>
                            <h1 className="text-white font-[900] text-[22px] md:text-[40px]">1.5M ($1,000)</h1>
                            <img src={gold} alt="silver" className="w-[120px] h-[80px] scale-150" />
                        </div>
                        <div className="flex flex-col items-center justify-center border border-blockchain-green rounded-xl h-[175px] md:h-[222px] w-auto bg-black">
                            <p className=" text-blockathon-green font-semibold text-[25px] -mb-2">2nd Prize</p>
                            <h1 className="text-white font-[900] text-[25px] md:text-[40px]">1.2M ($750)</h1>
                            <img src={silver} alt="silver" className="w-[120px] h-[80px] scale-150" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 ">
                    <div className="flex flex-row gap-0 items-start border border-blockchain-green rounded-xl h-[100px] md:h-[122px] w-auto bg-black">
                        <img src={design} alt="silver" className="w-[180px] h-[100px] scale-100 md:scale-125 mt-2" />
                        <div className="text-start flex flex-col items-start mt-2">
                            <h1 className="text-blockathon-green font-semibold text-[20px] -mb-2 mt-2">Best Design</h1>
                            <p className="text-white font-extrabold text-[25px] md:text-[40px]">400K ($250)</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-0 items-start border border-blockchain-green rounded-xl h-[100px] md:h-[122px] w-auto bg-black">
                        <img src={bronze} alt="silver" className="w-[180px] h-[100px]" />
                        <div className="text-start flex flex-col items-start mt-2">
                            <h1 className="text-blockathon-green font-semibold text-[20px] -mb-2 md:-mb-4 mt-2">3rd Prize</h1>
                            <p className="text-white font-extrabold text-[25px] md:text-[40px]">800k ($500)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prizes;