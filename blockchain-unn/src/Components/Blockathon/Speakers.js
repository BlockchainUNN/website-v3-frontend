import React from "react";
import Aronu from "../../assets/aronu.png";
import Peter from "../../assets/peterobi.png";
import Darlington from "../../assets/darlington.png";
import Annaelechukwu from "../../assets/annaelechukwu.png";
import Kevin from "../../assets/kevin.png";
import Alvan from "../../assets/alvan.png";

const Speakers = () => {
    return (
        <div className="bg-black px-[2rem] xl:px-[4rem] py-12 flex flex-col items-center">
            <h1 className="text-white text-[30px] font-bold mb-4">Speakers Lineup</h1>
            <div className="w-[95%] xl:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 mb-12 items-center justify-center">
                <div className="relative w-auto h-[423px]">
                    <img src={Aronu} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">UGOCHUKWU ARONU</h2>
                        <p>Blockchain Expert</p>
                        <p className="font-semibold text-[15px]">CEO Xend Finance</p>
                    </div>
                </div>
                <div className="relative w-auto h-[423px]">
                    <img src={Peter} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">MR. PETER OBI</h2>
                        <p>Political Expert</p>
                        <p className="font-semibold text-[15px]">LP Candidate</p>
                    </div>
                </div>
                <div className="relative w-auto h-[423px]">
                    <img src={Darlington} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">DARLINGTON NNAM</h2>
                        <p>Mechanic</p>
                        <p className="font-semibold text-[15px]">Co-founder, Horus Labs</p>
                    </div>
                </div>
                <div className="relative w-auto h-[423px]">
                    <img src={Annaelechukwu} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">ANNAELECHUKWU NDUKA</h2>
                        <p>Web3 Community Guy</p>
                        <p className="font-semibold text-[15px]">Co-founder BlockchainUNN</p>
                    </div>
                </div>
                <div className="relative w-auto h-[423px]">
                    <img src={Kevin} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">KEVIN CHIBUOYIM</h2>
                        <p>Ezemmuo Blockchain</p>
                        <p className="font-semibold text-[15px]">Co-founder BlockchainUNN</p>
                    </div>
                </div>
                <div className="relative w-auto h-[423px]">
                    <img src={Alvan} alt="Aronu" className="w-full h-full object-cover" />
                    <div className="w-full px-4 py-2 absolute bottom-4 text-white">
                        <h2 className=" font-bold font-serif text-[23px] mb-2">OKECHUKWU ALVAN</h2>
                        <p>Forex Expert</p>
                        <p className="font-semibold text-[15px]">Co-founder, BlockchainUNN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;