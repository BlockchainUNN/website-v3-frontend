import React from "react";
import bootcamp from '../../assets/community/community12.jpeg';

const BootcampHero = () => {
    return(
        <div className="w-full px-[5rem] my-[3rem] py-6 flex flex-col items-center gap-8">
            <p className="text-white font-inter-semibold text-[35px]">
                INTRODUCING
            </p>
            <h1 className="text-white font-inter-extrabold text-[65px]">
                Developers <span className="bg-white px-6 py-2 rounded-3xl text-black font-inter-extrabold text-[65px]">
                    Bootcamp
                </span>
            </h1>
            <h2 className="text-white font-inter-semibold text-[36px]">
            Raising experienced web2 and web3 developers.
            </h2>


            <div className="w-2/3 relative flex items-center h-[300px]">
                <img src={bootcamp} alt="bootcamp" className="w-[268.17px] h-[265.29px] rounded-3xl border border-white object-cover absolute -rotate-12 left-4 top-8" />
                <img src={bootcamp} alt="bootcamp" className="w-[268.17px] h-[265.29px] rounded-3xl border border-white object-cover absolute left-1/3 z-50 top-2" />
                <img src={bootcamp} alt="bootcamp" className="w-[268.17px] h-[265.29px] rounded-3xl border border-white object-cover absolute rotate-12 right-4 top-8" />
            </div>
        </div>
    );
}

export default BootcampHero;