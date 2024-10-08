import React from "react";
import blockchainwhite from "../../assets/logo-white.svg";

const Footer = () => {
    return (
        <div className="bg-black text-white pt-12 pb-6 px-2 md:px-[4rem] w-full">
            <div className="grid grid-cols-2 gap-2 md:gap-[20%] justify-between items-center">
                <div className="flex flex-col items-start w-auto px-2 md:px-[4rem]">
                    <img src={blockchainwhite} alt="" className="w-[150px] md:w-[300px] h-[60px] md:h-[120px] scale-150 object-cover" />
                    <p className="font-extrabold text-[20px] md:text-[50px] -mt-4 md:-mt-12">
                        BLOCKATHON
                    </p>
                </div>

                <div className="flex flex-col items-center justify-start w-auto px-2 md:px-[4rem]">
                    <p className="font-light text-[12px] md:text-[16px] mt-2 md:-mt-4 mb-2 md:mb-6">
                        FOLLOW US
                    </p>
                    <div className="flex items-center gap-2">
                        <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[30px] w-[30px] bg-[#031f0a]`}>
                            <p className="text-[12px] font-semibold">in</p>
                        </div>
                        <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[30px] w-[30px] bg-[#031f0a]`}>
                            <p className="text-[12px] font-semibold">in</p>
                        </div>
                        <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[30px] w-[30px] bg-[#031f0a]`}>
                            <p className="text-[12px] font-semibold">in</p>
                        </div>
                        <div className={`p-2 flex items-center justify-center border border-[#02641c] h-[30px] w-[30px] bg-[#031f0a]`}>
                            <p className="text-[12px] font-semibold">X</p>
                        </div>
                    </div>
                </div>    
            </div>
            <p className="text-center my-8 md:my-4 font-sans font-light text-[10px] md:text-[16px] ">
                  Copyright &copy; 2023 BlockchainUNN. All Rights Reserved
                </p>
        </div>

    );
}

export default Footer;