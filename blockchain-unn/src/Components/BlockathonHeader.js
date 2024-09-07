import React from "react";

const BlockathonHeader = () => {
    return(
        <div className="flex flex-row w-full px-2 sm:px-4 py-2 mb-2 items-center justify-center gap-4 md:gap-20 bg-[#CBD7CE]">
            <h1 className="text-black sm:text-[32px] text-[0.6rem] font-wallpoet font-normal">BLOCKATHON 3.0 || HACKATHON & CONFERENCE</h1>
            <button className="bg-gradient-to-r from-green-950 to-green-500 text-white px-4 sm:px-8 py-2 rounded-full text-[9px] sm:text-[1rem]">Register</button>
        </div>
    )
}

export default BlockathonHeader;