import React from "react";
import bootcamp1 from '../../assets/events/bootcamp1.png';
import bootcamp2 from '../../assets/events/bootcamp2.png';
import bootcamp3 from '../../assets/events/bootcamp3.png';

const BootcampHero = () => {
    return(
        <div className="w-full md:px-[5rem] px-4 md:my-[3rem] py-6 flex flex-col items-center md:gap-8 gap-4">
            <p className="text-white font-inter-semibold text-[35px]">
                INTRODUCING
            </p>
            <h1 className="text-white font-inter-extrabold text-[20px] md:text-[65px]">
                Content Writers <span className="bg-white px-6 py-2 rounded-3xl text-black font-inter-extrabold text-[20px] md:text-[65px]">
                    Bootcamp
                </span>
            </h1>
            <h2 className="text-white font-inter-semibold text-center text-[12px] md:text-[36px]">
            Raising experienced web2 and web3 content writers.
            </h2>


            <div className="w-full md:w-2/3 relative flex items-center h-[150px] md:h-[300px]">
                <img src={bootcamp3} alt="bootcamp" className="md:w-[268.17px] w-[102.32px] h-[101.22px] md:h-[265.29px] md:rounded-3xl rounded-lg object-cover absolute left-5 md:left-8 top-4 md:top-8" />
                <img src={bootcamp1} alt="bootcamp" className="md:w-[268.17px] w-[102.32px] h-[101.22px] md:h-[265.29px] md:rounded-3xl rounded-lg object-cover absolute left-1/3 z-50 top-2" />
                <img src={bootcamp2} alt="bootcamp" className="md:w-[268.17px] w-[102.32px] h-[101.22px] md:h-[265.29px] md:rounded-3xl rounded-lg object-cover absolute right-5 md:right-9 top-4 md:top-8" />
            </div>
        </div>
    );
}

export default BootcampHero;