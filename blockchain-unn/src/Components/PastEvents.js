import React, { useState, useContext } from "react";
import { ThemeContext } from "./Theme";
import timer from "../assets/icons/timer.svg";
import timerwhite from "../assets/icons/timer-white.svg";
import sportsfiesta from "../assets/events/sportsFiesta.png";
import previousicon from "../assets/icons/previous-icon.svg";
import nexticon from "../assets/icons/next-icon.svg";
import { useNavigate } from "react-router-dom";
import space1 from "../assets/events/spaces/1.jpg";
import cartesievent from "../assets/events/cartesievent.png";
import avax_pizza from "../assets/events/avax-pizza.png";
import blockchainunn_ai from "../assets/events/blockchainunn-ai.png";

const events = [
  {
    imageSrc: space1,
    date: "16TH OCT, 2024",
    title: "ROAD TO BLOCKATHON",
    link: "",
  },
  {
    imageSrc: cartesievent,
    date: " 20TH AUG, 2024",
    title: "CARTESI DEV BOUNTY EVENT",
    link: "https://x.com/BlockchainUNN/status/1825805134158352665?t=UV32f_HOphg8xJMyr5_9Jw&s=08",
  },
  {
    imageSrc: sportsfiesta,
    date: "SAT. 29TH JUN, 2024",
    title: "SPORTS FIESTA",
    link: "https://x.com/BlockchainUNN/status/1805166684707107171?t=0W8TpwKPtPB9bXJSrqSCwg&s=08",
  },
  {
    imageSrc: avax_pizza,
    date: " 22ND MAY, 2024",
    title: "AVAX BITCOIN PIZZA PARTY",
    link: "https://x.com/BlockchainUNN/status/1792505649957310517?t=WLal0ApwntMkd17g95Zo_A&s=08",
  },
  {
    imageSrc: blockchainunn_ai,
    date: " 2ND FEB, 2024",
    title: "BLOCKCHAINUNN AI WORKSHOP",
    link: "https://x.com/BlockchainUNN/status/1752642347999867177?t=C_ttVwE8HBqWB34_ELkueA&s=08",
  },
];

const PastEvents = () => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    );
  };

  const { imageSrc, date, title, link } = events[currentIndex];

  return (
    <div className="w-[88%] flex flex-col gap-4 items-center justify-center my-12">
      <div className="flex items-center justify-center gap-2 w-full">
        <img
          src={theme ? timerwhite : timer}
          alt="timer"
          className="w-[38px] h-[38px] md:w-[95px] md:h-[95px]"
        />
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } text-[22.5px] md:text-[55px]`}
        >
          Past Events
        </h1>
      </div>

      <div className="flex items-center justify-between w-[95%] md:[85%]">
        <div className="relative w-full border-gradient">
          <img
            src={previousicon}
            alt="previous"
            onClick={handlePrevious}
            className="absolute -left-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          />

          <div className="w-full h-[200px] md:h-[650px] rounded-xl">
            <a href={`${link}`}>
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </a>
          </div>

          <div className="font-wallpoet h-[fit-content] px-6 py-4 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center bg-blockchain-white rounded-b-md">
            <div className="text-center">
              <p className="text-[16px] md:text-[20px]">{date}</p>
              <h1 className="text-[20px] md:text-[35px] text-semibold">
                {title}
              </h1>
              <button
                onClick={() => navigate(`${link}`)}
                className={`${
                  theme ? "text-white" : "text-black"
                } my-4 border border-blockchain-green rounded-sm bg-transparent px-6 py-4 text-[24px] font-mono cursor-pointer`}
              >
                Explore Event
              </button>
            </div>
          </div>
          <img
            src={nexticon}
            alt="previous"
            onClick={handleNext}
            className="absolute -right-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
