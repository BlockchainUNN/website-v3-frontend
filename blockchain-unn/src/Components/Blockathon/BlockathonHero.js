import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Theme";
import Hacker from "../../assets/blockathonc.png";
import blockathon from "../../assets/blockathonlogo.png";
// import { useNavigate } from "react-router-dom";
import map from "../../assets/map.png";
import cup from "../../assets/icons/smallcup.svg";
import attendee from "../../assets/icons/attendee.svg";
import speaker from "../../assets/icons/speaker.svg";
import sponsor from "../../assets/icons/sponsor.svg";
import hacker from "../../assets/icons/hacker.svg";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlockathonHero = () => {
  const { theme } = useContext(ThemeContext);
  //   const navigate = useNavigate();

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-30T00:00:00");
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
    <div className={`w-full  ${theme ? "bg-black" : "bg-black"}`}>
      <div className="flex flex-col items-center justify-center w-full h-screen relative">
        <img
          src={Hacker}
          alt="blockathon"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/4 md:top-1/3 md:left-auto flex flex-col gap-4 items-center justify-center">
          <div className="w-[85%] h-[75px] md:h-[180px] flex items-center justify-center px-4 bg-white">
            <img src={blockathon} alt="Blockchain" className="w-full h-full" />
          </div>
          <h1 className="text-white text-[25px] md:text-[50px] font-bold ">
            BlockchainUNN <span className="font-light">Conference</span> 3.0
          </h1>

          <div className="flex flex-wrap md:flex-row gap-0 md:gap-4 w-[85%] justify-evenly items-center text-white mt-4 md:mt-12">
            <div className="rounded-full  px-4 py-4 border border-white w-[300px] h-[75px] flex flex-col items-center justify-center scale-75 md:scale-100">
              <p className="w-full px-2 text-[16px] md:text-[18px] text-center md:text-start">
                3rd Edition, Enugu Nigeria
              </p>
              <p className="flex gap-2 items-center justify-center md:justify-start w-full px-2 text-[18px] ">
                <FaCalendarAlt /> 21st-26th October
              </p>
            </div>
            <div className="rounded-full px-4 py-4 border border-white w-[300px] h-[75px] flex items-center scale-75 md:scale-100">
              <p className="w-full px-2 text-[18px] text-center">
                Learn . Build . Innovate
              </p>
            </div>
            <div className="rounded-full  px-4 py-4 border border-white w-[300px] h-[75px] flex flex-col items-center justify-center scale-75 md:scale-100">
              <p className="w-full px-2 text-[18px] text-center md:text-start flex items-center gap-2 justify-center md:justify-start">
                $3000 <img src={cup} alt="cup" className="w-4 h-4" />
              </p>
              <p className="w-full px-2 text-[18px] text-center md:text-start">
                Prize pool to be won.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-dark-mode flex flex-col md:flex-row md:px-8 py-4 items-center justify-center md:justify-evenly gap-2 md:gap-8 w-full h-[450px] md:h-[320px]`}
      >
        <div
          className={`flex flex-col md:flex-row md:px-8 py-4 items-center justify-evenly gap-8 w-full md:w-[85%] h-full`}
        >
          <div className="flex flex-col gap-8 md:gap-4 items-center md:items-start w-[85%] md:w-full">
            <div className="text-white flex flex-row justify-start items-center  gap-4 ">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img src={attendee} alt="attendee" className="w-8 h-8" />
                <div className="text-start md:text-center flex flex-col items-center">
                  <p className="text-[1rem] md:text-[1.3rem] font-bold">3000</p>
                  <p>Attendee</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  items-center gap-2">
                <img src={speaker} alt="speaker" className="w-8 h-6" />
                <div className="text-center flex flex-col items-center">
                  <p className="text-[1.3rem] font-bold">30</p>
                  <p>Speakers</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  items-center gap-2">
                <img src={sponsor} alt="sponsor" className="w-8 h-6" />
                <div className="text-center flex flex-col items-center">
                  <p className="text-[1.3rem] font-bold">10+</p>
                  <p>Sponsors</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  items-center gap-2">
                <img src={hacker} alt="hacker" className="w-8 h-8" />
                <div className="text-center flex flex-col items-center">
                  <p className="text-[1.3.rem] font-bold">500</p>
                  <p>Hackers</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:items-center md:justify-center text-[0.9rem] md:text-[20px] text-center text-white">
              <span className="flex flex-col md:flex-row-reverse items-center gap-2">
                <p className="text-[1rem]">DAYS</p>
                <p className="text-[2rem] font-bold">{timeLeft.days}</p>
              </span>
              <span className="flex flex-col md:flex-row-reverse items-center gap-2">
                <p className="text-[1rem]">HOURS</p>
                <p className="text-[2rem] font-bold">{timeLeft.hours}</p>
              </span>
              <span className="flex flex-col md:flex-row-reverse items-center gap-2">
                <p className="text-[1rem]">MINUTES</p>
                <p className="text-[2rem] font-bold">{timeLeft.minutes}</p>
              </span>
              <span className="flex flex-col md:flex-row-reverse items-center gap-2">
                <p className="text-[1rem]">SECONDS</p>
                <p className="text-[2rem] font-bold">{timeLeft.seconds}</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center ">
            <Link to="/blockathon/registration">
            <button className="px-12 py-4 border-white border rounded-md text-white w-full md:w-[310px]">
              Register for Conference
            </button>
            </Link>
            <Link to="/blockathon/hackathon/registration">
            <button className="px-12 py-4 bg-gray-200 rounded-md text-black w-full md:w-[310px]">
              Join the Hackathon
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-[13%] w-full px-8 py-8 text-white">
        <div className="w-full md:w-[40%]">
          <h1 className="font-semibold mb-2 font-serif text-[28px] text-center md:text-start">
            Blockathon Overview
          </h1>
          <p className="w-full text-justify font-medium">
            BlockchainUNN Conference 3.0, themed "
            <span className="text-white font-bold">BLOCKATHON</span>," is set to take
            place this October. This third annual event is a dynamic 6-day
            hackathon and building session designed to onboard the next
            generation of blockchain builders. Combining workshops, learning
            programs, networking opportunities, a career fair, panel sessions,
            and talks from over 10 industry experts,{" "}
            <span className="text-white font-bold">BLOCKATHON</span> aims to educate
            and inspire both technical and non-technical participants.
          </p>
          <p className="w-full text-justify font-medium mt-4">
            With an expected turnout of 5000+ attendees, including 200-300
            hackers, and backed by solid industry sponsors, the conference
            showcases the endless possibilities within the blockchain ecosystem.
            At its core, BlockchainUNN believes that education is crucial for
            widespread blockchain adoption, and{" "}
            <span className="text-white font-bold">BLOCKATHON</span> serves as a
            platform to bring this education to the forefront while recognizing
            and nurturing emerging talent in the field.
          </p>
        </div>
        <div className="relative w-full md:w-[450px] h-[250px] text-center">
          <img src={map} alt="blockathon" className="w-full h-full" />
          <p className="text-black absolute top-[4rem] w-full font-bold font-serif text-[22px]">
            Lion Science Park
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockathonHero;
