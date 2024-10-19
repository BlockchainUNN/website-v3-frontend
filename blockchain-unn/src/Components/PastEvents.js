import React, { useState, useContext } from "react";
import { ThemeContext } from "./Theme";
import timer from "../assets/icons/timer.svg";
import timerwhite from "../assets/icons/timer-white.svg";
import sportsfiesta from "../assets/events/sportsFiesta.png";
import previousicon from "../assets/icons/previous-icon.svg";
import nexticon from "../assets/icons/next-icon.svg";
import { useNavigate } from "react-router-dom";
import space1 from "../assets/events/spaces/1.jpg";

const events = [
  {
    imageSrc: space1,
    date: "SAT. 29TH || JUN, 2024",
    title: "SPORTS FIESTA",
  },
  {
    imageSrc: sportsfiesta,
    date: "SAT. 30TH || JUN, 2024",
    title: "SPORTS FIESTA 2",
  },
  {
    imageSrc: sportsfiesta,
    date: "SAT. 31ST || JUN, 2024",
    title: "SPORTS FIESTA 3",
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

  const { imageSrc, date, title } = events[currentIndex];

  return (
    <div className="w-[88%] flex flex-col gap-4 items-center justify-center my-12">
      <button
        onClick={() => navigate("/event")}
        className={`${
          theme ? "text-white" : "text-black"
        } my-12 border border-blockchain-green rounded-sm bg-transparent px-6 py-4 text-[24px] font-mono`}
      >
        Explore Event
      </button>
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
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="font-wallpoet h-[fit-content] px-6 py-4 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center bg-blockchain-white rounded-b-md">
            <div className="text-center">
              <p className="text-[16px] md:text-[20px]">{date}</p>
              <h1 className="text-[20px] md:text-[35px] text-semibold">
                {title}
              </h1>
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
