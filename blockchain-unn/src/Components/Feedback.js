import React, { useContext } from "react";
import feedbackImage from "../assets/feedback.png";
import ransom from "../assets/events/feedback/ransom.jpg";
import gloria from "../assets/events/feedback/gloria.jpg";
import fortune from "../assets/events/feedback/fortune.jpg";
import henry from "../assets/events/feedback/henry.jpg";
import peter from "../assets/events/feedback/peter.jpg";
import samson from "../assets/events/feedback/samson.jpg";
import x from "../assets/icons/x.svg";
import { ThemeContext } from "./Theme";

const Feedback = ({ feedbackData }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-8 mb-8 flex flex-col gap-8 items-center justify-center w-full">
      <h2
        className={`${
          theme ? "text-white" : "text-black"
        } text-[24px] md:text-[48px] font-semibold`}
      >
        Community Feedbacks
      </h2>

      <div className="flex flex-row md:flex-wrap  w-[99%] overflow-x-hidden md:w-full gap-[2.5rem] items-center justify-center ">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className={`${
              theme ? "bg-dark-mode" : "bg-transparent"
            } w-[230px] h-fit flex-shrink-0 md:w-[400px] md:h-fit border-gradient animate animate-scroll-right md:animate-none`}
          >
            <div
              className={` ${
                theme ? "text-white" : "text-black"
              } flex flex-col gap-4 p-4`}
            >
              <div className="flex justify-between">
                <div className="flex justify-evenly items-center gap-2">
                  <img
                    src={feedback.image}
                    alt="profile"
                    className="w-[39px] md:w-[57px] h-[39px] md:h-[57px] rounded-full"
                  />
                  <div>
                    <p className="text-[13px] md:text-[18px] font-medium">
                      {feedback.name}
                    </p>
                    <p className="text-[10px] md:text-[12px]">
                      {feedback.username}
                    </p>
                  </div>
                </div>
                <div className=" w-[31px] h-[31px] items-center justify-center rounded-md hidden md:flex">
                  {/* <img src={x} alt='x' className="w-[70%] h-[70%]" /> */}
                </div>
              </div>
              <p className="text-[9px] md:text-[18px]">{feedback.message}</p>
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
    name: "Ransom Eze",
    username: "Frontend Dev & Upcoming Blockchain Dev",
    message: `BlockchainUNN has impacted in me immensely. \n\nAs a student, it showed me that there’s more to the campus life than books alone. I got introduced to blockchain and have dug deeper into it since then and now pursuing a blockchain/smart contract developer career path`,
    image: ransom,
  },
  {
    name: "Henry Igwe",
    username: "Frontend Web Developer",
    message:
      "I joined BlockchainUNN after the BlockchainUNN conference 1.0 held on 5th March 2022 with the theme 'Demystifying Blockchain Technology and Cryptocurrency.' I got inspired and motivated during the conference. With proper guidance, they tutored and directed my learning process. Today I am a React developer and can proudly say that I am a product of BlockchainUNN.",
    image: henry,
  },
  {
    name: "Fortune Atueyi",
    username: "Web3 Project Manager",
    message:
      "Prior to the BlockchainUNN conference 2.0, I didn't know much about Blockchain Technology. The theme of the conference inspired me to come because I wanted to understand how it works. I came, and learnt so much as the speakers did justice to the topics. I also participated in tasks and won a giveaway. I got my first Web 3 job which paid me $$$.",
    image: fortune,
  },
  {
    name: "Samson Damian",
    username: "Research Analyst",
    message:
      "I could not differentiate between bitcoin and cryptocurrency nor what Blockchain meant until I attended BlockchainUNN 1.0 conference. BlockchainUNN 1.0 conference stirred the flair for web development in me. It did not end there, through Blockchain UNN weekly sessions on telegram and her cohort I grew from a Newbie into a Techie.",
    image: samson,
  },
  {
    name: "Obi Nnaemeka Simon-Peter",
    username: "Full-stack Developer",
    message:
      "I was introduced to BlockchainUNN by a friend shortly before their second conference, and officially became a member afterward. The bootcamp they held right after the conference was a game-changer, helping me smoothly transition from being a Web2 to Web3 developer. Being part of this community has had a huge impact on my career, thanks to the events, programs, and supportive members. I'm really grateful for everything they do.",
    image: peter,
  },
  {
    name: "Madubueze Gloria Ifeoma",
    username: "Web Developer",
    message:
      "BlockchainUNN holds a special place in my tech journey; they are an integral part of my story. I attended the BlockchainUNN 1.0 conference in 2022. It was my first-ever tech event, and I won a Laptop at the event. I will forever be grateful to the BlockchainUNN team for their continuous inspiration and for being a constant source of support on my tech journey.",
    image: gloria,
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
