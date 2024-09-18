import React, { useContext } from "react";
import feedbackImage from "../assets/feedback.png";
import x from "../assets/icons/x.svg";
import { ThemeContext } from "./Theme";

const Feedback = ({ feedbackData }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="mt-8 mb-8 flex flex-col gap-8 items-center justify-center">
            <h2 className={`${theme ? "text-white" : "text-black"} text-[24px] md:text-[48px] font-semibold`}>
                Community Feedbacks
            </h2>

            <div className="flex flex-row md:flex-wrap  w-[99%] overflow-x-hidden md:w-[85%] gap-4 items-center justify-center ">
                {feedbackData.map((feedback, index) => (
                    <div key={index} className={`${theme ? "bg-dark-mode" : "bg-transparent"} w-[230px] h-[149px] flex-shrink-0 md:w-[375px] md:h-[260px] border-gradient animate animate-scroll-right md:animate-none`}>
                        <div className={` ${theme ? "text-white" : "text-black"} flex flex-col gap-4 p-4`}>
                            <div className="flex justify-between">
                                <div className="flex justify-evenly items-center gap-2">
                                    <img src={feedback.image} alt="profile" className="w-[39px] md:w-[57px] h-[39px] md:h-[57px] rounded-full" />
                                    <div>
                                        <p className="text-[13px] md:text-[18px] font-medium">
                                            {feedback.name}
                                        </p>
                                        <p className="text-[10px] md:text-[12px]">
                                            {feedback.username}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-blockchain-green w-[31px] h-[31px] items-center justify-center rounded-md hidden md:flex">
                                    <img src={x} alt='x' className="w-[70%] h-[70%]" />
                                </div>
                            </div>
                            <p className="text-[9px] md:text-[18px]">
                                {feedback.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Sample feedback data
const feedbackData = [
    {
        name: "Chinecherem",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
    {
        name: "Chinaemerem",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
    {
        name: "Chinenyenwa",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
    {
        name: "Chinecherem",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
    {
        name: "Chinecherem",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
    {
        name: "Chinecherem",
        username: "@china_mere",
        message: "Thank you BlockchainUNN for the opportunity to learn from your community and I'm so excited, I landed my first job in the web3 space.",
        image: feedbackImage
    },
];


const FeedbackPage = () => {

    return (
            <div className="w-full">
                <Feedback feedbackData={feedbackData} />
            </div>
    );
};

export default FeedbackPage;
