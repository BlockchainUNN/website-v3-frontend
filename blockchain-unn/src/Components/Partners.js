import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import garage from "../assets/garage.svg";


const Partner = ({ partnerImages }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={` ${theme ? "bg-darkmode" : "bg-white"} mb-12 border-t border-b border-gray-500 py-8 w-full`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <p className={` ${theme ? "text-white" : "text-black"} text-[30px] md:text-[50px] font-medium`}>
                    Our Partners
                </p>
                <p className={` ${theme ? "text-white" : "text-black"} text-[14px] md:text-[28px] w-[95%] text-center`}>
                    In <span className="text-blockchain-green font-raleway text-[14px] md:text-[28px]">BlockchainUNN</span> community, we believe in the power of partnership and collaboration.
                </p>
            </div>
            <div className="my-8 w-full overflow-x-hidden">
                <div className="flex gap-4">
                    {partnerImages.map((image, index) => (
                        <div
                            key={index}
                            className={`${theme ? "bg-black" : "bg-black"} h-[123px] w-[258px] rounded-2xl flex items-center justify-center flex-shrink-0`}
                        >
                            <img src={image} alt={`partner-${index}`} className="w-[85%] h-[85%] object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Partners = () => {

    const partnerImages = [
        garage, 
        garage,
        garage,
        garage,
        garage,
        garage,
        garage,
    ];

    return (
        <Partner partnerImages={partnerImages} />
    );
};

export default Partners;