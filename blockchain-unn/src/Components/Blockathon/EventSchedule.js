import React from "react";
import arrow from "../../assets/icons/rightarrow.svg";
import winner from "../../assets/winner.png";
import winner2 from "../../assets/winner2.png";
import winner3 from "../../assets/winner3.png";
import winner4 from "../../assets/winner4.png";
import images from "../../assets/icons/images.svg";
import video from "../../assets/icons/video.svg";
import blockchainunn from "../../assets/blockchainunn-green.png";
import gallery from "../../assets/gallery.png";
import videos from "../../assets/video.png";
import Categories from "./Categories";
import Prizes from "./Prizes";

const EventSchedule = () => {
  return (
    <div className="bg-black px-4 md:px-[4rem] py-12 flex flex-col items-center w-full">
      <h1 className="text-white text-[30px] font-bold mb-8">Event Schedule</h1>

      <div className="w-full md:w-[80%] flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 1
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black font-medium text-[10px]">
                Mon 28th October, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Online Hackathon officially starts with workshops from sponsors.
              </h2>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className=" rotate-90 mb-6 md:mb-0 md:rotate-0"
          />
          <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 2
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black font-medium text-[10px]">
                Tue 29th October, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Online Hackathon day (2) two continues with the hackers and
                their teams.
              </h2>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className=" rotate-90 mb-3 md:mb-0 md:rotate-0 flex py-2 md:hidden"
          />
        </div>
        <div className=" flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 3
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black ffont-medium text-[10px]">
                Wed 30th October, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Admissions to all registered participants into the hacker house
                for the physical phase.
              </h2>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className="rotate-90 mb-6 md:mb-0 md:rotate-0"
          />
          <div className="relative w-full sm:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 4
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black font-medium text-[10px]">
                Thur 31st October, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Physical Hackathon day (2) two continues with hackers rounding
                up.
              </h2>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className=" rotate-90 mb-3 py-2 md:mb-0 md:rotate-0 flex md:hidden"
          />
        </div>
        <div className=" flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-[579px] h-[150px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 5
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black font-medium text-[10px]">
                Fri 1st November, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Judges will review and judge, and the top 10 projects get to do
                a physical presentation.
              </h2>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className="rotate-90 mb-6 md:mb-0 md:rotate-0"
          />
          <div className="relative w-full md:w-[579px] h-[170px] sm:h-[120px] bg-blockchain-white flex flex-col items-center px-8 py-4">
            <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
              DAY 6
            </p>
            <div className="w-full flex flex-col items-start justify-center mt-3">
              <p className="text-black font-medium text-[10px]">
                Sat 2nd November, 2024
              </p>
              <h2 className="text-black font-semibold text-[18px]">
                Conference 3.0 grand finale event for all techies. (Newbies,
                Designers Developers Content writers, e.t.c.)
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Categories />
      <Prizes />

      <div className="my-[3rem] flex flex-col items-center justify-center w-[90%] mx-auto">
        <h1 className="text-white text-[25px] text-center md:text-[30px] font-bold mb-8">
          Our Journey Since Inception
        </h1>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 ">
          <div className="w-full md:w-[45%] h-fit  flex flex-col items-center">
            <div className="w-full bg-white h-[58px] flex items-center justify-between px-4">
              <img src={blockchainunn} alt="logo" className="w-[30%] h-auto" />
              <h2 className="text-black font-bold text-[18px]">
                Conference 1.0
              </h2>
            </div>
            <img
              src={gallery}
              alt="winner"
              className="w-[92%] h-auto object-cover"
            />

            <a className="w-full" href="https://drive.google.com/drive/folders/1AOukLk8tMOUu-ZjuSLMRPlQFSMPVJzMy">
              <div className="w-full bg-white h-[88px] flex items-center justify-between px-4">
                <h2 className="text-black font-extrabold text-[23px] underline">
                  View Gallery
                </h2>
                <img src={images} alt="icon" className="w-6 h-6" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-[45%] h-fit  flex flex-col items-center">
            <div className="w-full bg-white h-[58px] flex items-center justify-between px-4">
              <img src={blockchainunn} alt="logo" className="w-[30%] h-auto" />
              <h2 className="text-black font-bold text-[18px]">
                Conference 2.0
              </h2>
            </div>
            <img
              src={videos}
              alt="winner"
              className="w-[92%] h-auto object-cover"
            />
            <a className="w-full" href="https://youtu.be/LMZLV6uYgns?si=6CD6mvo4nOCSms7a">
              <div className="w-full bg-white h-[88px] flex items-center justify-between px-4">
                <h2 className="text-black font-extrabold text-[23px] underline">
                  Watch Video
                </h2>

                <img src={video} alt="icon" className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="my-[3rem] flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-[25px] text-center md:text-[30px] font-bold mb-8">
          Community Achievements since 2.0
        </h1>

        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <div className="grid grid-cols-1  md:flex items-center w-full gap-6 justify-center ">
            <div className="relative w-auto h-[416px]">
              <img
                src={winner}
                alt="winner"
                className="w-full h-full object-cover"
              />
              <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                $3000 won by some of our devs and his team at ayathon
              </p>
            </div>
            <div className="relative w-auto h-[416px]">
              <img
                src={winner2}
                alt="winner"
                className="w-full h-full object-cover"
              />
              <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                Our community member won $4,500 at Muaccra Hackathon
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1  md:flex items-center w-full gap-6 justify-center ">
            <div className="relative w-auto h-[416px]">
              <img
                src={winner3}
                alt="winner"
                className="w-full h-full object-cover"
              />
              <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                3 of Our Dev Teams won at Hackerx Hackathon
              </p>
            </div>
            <div className="relative w-auto h-[416px]">
              <img
                src={winner4}
                alt="winner"
                className="w-full h-full object-cover"
              />
              <p className="px-4 py-4 bg-white absolute bottom-0 w-full text-center text-black font-bold text-[20px]">
                Our Hackers won out of the Lisk $1,500 bounty pool at web3 Lagos
                Con Hackathon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
