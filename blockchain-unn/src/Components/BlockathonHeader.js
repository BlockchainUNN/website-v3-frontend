import React from "react";

const BlockathonHeader = () => {
    return(
        <div className="flex flex-row w-full px-4 py-2 mb-2 items-center justify-center gap-20 bg-[#CBD7CE]">
            <h1 className="text-black text-[32px] font-wallpoet font-normal">BLOCKATHON 3.0 || HACKATHON & CONFERENCE</h1>
            <button className="bg-gradient-to-r from-green-950 to-green-500 text-white px-8 py-2 rounded-full">Register</button>
        </div>
    )
}

export default BlockathonHeader;