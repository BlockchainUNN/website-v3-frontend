import React from "react";
import question from "../../assets/icons/question.svg";
import code from "../../assets/skill.jpeg";
import arrowup from "../../assets/icons/arrow-up.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/location.svg";

const aboutData = [
  {
    name: "Registration opens",
    message: "Registration will open on Saturday, November 2nd, 2024.",
  },
  {
    name: "Registration closes",
    message: "Registration will close on Saturday, November 9th, 2024.",
  },
  {
    name: "X space",
    message:
      "We will have an X space to kick off the bootcamp by 8pm WAT of the same day.",
  },
  {
    name: "Classes starts",
    message: "Officially on Sunday, 10th November 2024, from 7:30-9:30 pm WAT.",
  },
];

const BootcampAbout = () => {
  return (
    <div className="w-full px-[5rem] my-[3rem] py-6 flex flex-col items-center gap-8">
      <div className="flex flex-row gap-4 items-center ">
        {aboutData.map((about, index) => (
          <div
            key={index}
            className={`bg-dark-mode-3 w-[288px] h-[153px] p-1 rounded-xl top-border`}
          >
            <div
              className={`
             text-white flex flex-col gap-4 p-4 rounded-xl`}
            >
              <div className="">
                <h3 className="text-[13px] md:text-[18px] font-medium">
                  {about.name}
                </h3>
              </div>
              <p className="text-[9px] md:text-[16px] font-[300] w-full overflow-hidden break-words">
                {about.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center ">
        <div className="bottom-border w-[594px] h-[251px] rounded-xl bg-dark-mode-3 flex flex-row-reverse items-center px-6 py-2 rotate-180">
          <p className="text-white opacity-60 font-wallpoet text-[40px] font-[400] leading-tight -rotate-180">
            Who is this Bootcamp for
          </p>
          <img src={question} alt="question mark" className="-rotate-180" />
        </div>
        <div className="w-[288px] h-[251px] bottom-border bg-dark-mode-3 flex flex-col-reverse px-5 py-4 text-white rotate-180 items-end">
          <img
            src={code}
            alt="web2"
            className="h-[112px] w-full rounded-xl object-cover -rotate-180"
          />
          <h3 className="text-[13px] md:text-[18px] font-inter-semibold mb-4 -rotate-180">
            The web2 stream
          </h3>
          <p className="text-[9px] md:text-[16px] font-[300] w-full overflow-hidden break-words max-w-[80%] -rotate-180">
            is for total programming beginners
          </p>
        </div>
        <div className="w-[288px] h-[251px] bottom-border bg-dark-mode-3 flex flex-col-reverse px-5 py-4 text-white rotate-180 items-end ">
          <img
            src={code}
            alt="web2"
            className="h-[112px] w-full rounded-xl object-cover -rotate-180"
          />
          <h3 className="text-[13px] md:text-[18px] font-inter-semibold mb-4 -rotate-180">
            The web3 stream
          </h3>
          <p className="text-[9px] md:text-[16px] font-[300] w-full overflow-hidden break-words max-w-[95%] -rotate-180 text-left">
            For web2 developers intending to delve into web3
          </p>
        </div>
      </div>

      <div className="w-full h-fit px-6 py-4 flex flex-col gap-[6rem] items-center relative">
        <div
          className="bottom-border h-[216px] w-full bg-dark-mode-3 rounded-xl border-b-[#202020] flex items-center px-[12rem] py-4 gap-[8%]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 93% 100%, 7% 100%)",
          }}
        >
          <div className="w-[370px] h-fit">
            <div className="flex gap-2 items-center ">
              <img src={clock} alt="clock" />
              <p className="text-white font-inter font-bold text-[22px]">
                Time
              </p>
            </div>
            <p className="text-white text-[16px] pl-8">
              Both programs will run concurrently on the same day and time,
              three times a wek. The proposed date and time are{" "}
              <span className="font-bold"> 7:30-9:30pm WAT </span>
              on <span className="font-bold"> Sundays </span> and{" "}
              <span className="font-bold">Tuesday</span>, and{" "}
              <span className="font-bold">5:00-7:00pm WAT</span> on{" "}
              <span className="font-bold">Fridays.</span>
            </p>
          </div>

          <div className="w-[370px] h-fit">
            <div className="flex gap-2 items-center">
              <img src={location} alt="clock" />
              <p className="text-white font-inter font-bold text-[22px]">
                Location
              </p>
            </div>
            <p className="text-white text-[16px] pl-8">
              The classes on <span className="font-bold"> Sundays </span>
              and <span className="font-bold"> Tuesdays </span> will be held{" "}
              <span className="font-bold">virtually</span>, while classes will
              be held <span className="font-bold">physically</span> on{" "}
              <span className="font-bold"> Fridays </span> at the{" "}
              <span className="font-bold"> BlockchainUNN </span>
              hacker house.
            </p>
          </div>
        </div>
        <img
          src={arrowup}
          alt="arrow up"
          className="h-[192.07px] w-[192.07px] absolute top-[32%] z-50"
        />
        <div
          className="border-b-[4px] rounded-xl  border-[#2CE85E] h-[216px] w-full bg-dark-mode-4 flex items-center px-[12rem] py-4 gap-4"
          style={{
            clipPath: "polygon(100% 100%, 0% 100%, 7% 0%, 93% 0%)",
          }}
        >
          <div className="w-full h-fit">
            <div className="flex gap-2 items-center">
              <img src={clock} alt="clock" />
              <p className="text-white font-inter font-bold text-[22px]">
                Instructor preparations
              </p>
            </div>
            <div className="flex flex-row items-center gap-8 mt-2">
              <p className="text-white text-[16px] pl-8">
                All instructions are expected to start working on their slides
                fo the classes and are mandated to create a list of resources
                the students should review.
              </p>
              <p className="text-white text-[16px]">
                If for any reason an instructor an instructor won’t be available
                for a class, it’s expected that you inform your cohort lead a
                week before hand.
              </p>
              <p className="text-white text-[16px]">
                If as an instructor, you run into any issues, amd you think we
                could help with it (electricity, data, etc), reach out to the
                bootcamp lead (Obi Nnaemeka).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampAbout;
