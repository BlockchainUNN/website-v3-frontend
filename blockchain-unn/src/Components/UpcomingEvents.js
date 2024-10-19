import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Theme";
import timer from "../assets/icons/timer.svg";
import timerwhite from "../assets/icons/timer-white.svg";
import blockathon from "../assets/events/Blockathon DISPLAY by Okey Designs.jpg";

const UpcomingEvents = () => {
  const { theme } = useContext(ThemeContext);

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-28T10:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full flex flex-col gap-4 items-center justify-center my-12"
      id="events"
    >
      <div className="flex items-center justify-center gap-2 w-full">
        <img
          src={theme ? timerwhite : timer}
          alt="timer"
          className="w-[38px] h-[38px] md:w-[95px] md:h-[95px]"
        />
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } text-[22.5px] md:text-[55px] `}
        >
          Upcoming Events
        </h1>
      </div>

      <div className="w-full md:w-[85%] border-gradient">
        <div className="w-full h-[200px] md:h-[620px] rounded-xl">
          <img
            src={blockathon}
            alt="blockathon"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        <div className="font-wallpoet h-[fit-content] px-6 py-4 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between bg-blockchain-white rounded-b-md">
          <div className="text-center md:text-start">
            {/* <p className="text-[16px] md:text-[20px]">Coming Soon</p> */}
            <h1 className="text-[20px] md:text-[35px] text-semibold">
              BLOCKATHON
            </h1>
            <p className="font-mono text-[16px] md:text-[18px]">
              Conference / Hackathon
            </p>
          </div>
          <div className="flex gap-4 md:items-center md:justify-center text-[0.9rem] md:text-[20px] text-center">
            <span>
              <p>{timeLeft.days}</p>
              <p>Days</p>
            </span>
            <span>
              <p>{timeLeft.hours}</p>
              <p>Hours</p>
            </span>
            <span>
              <p>{timeLeft.minutes}</p>
              <p>Minutes</p>
            </span>
            <span>
              <p>{timeLeft.seconds}</p>
              <p>Seconds</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
