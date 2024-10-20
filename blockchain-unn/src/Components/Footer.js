import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import blockchainunn from "../assets/blockchainunn-green.png";
import blockchainunnwhite from "../assets/blockchainunn-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme ? "bg-dark-mode" : "bg-white"
      } flex flex-col items-center justify-center gap-4 w-full mt-12 `}
    >
      <div
        className={`flex items-center justify-between border-t border-b ${
          theme ? "border-gray-600" : "border-gray-400"
        } w-full`}
      >
        <div
          className={`md:px-[4rem] px-0 py-[2rem] flex items-center gap-2 w-[50%] md:gap-12 border-r ${
            theme ? "border-gray-600" : "border-gray-400"
          } md:w-[45%]`}
        >
          <img
            src={`${theme ? blockchainunnwhite : blockchainunn}`}
            alt="blockchain-unn-logo"
            className="w-28 md:w-[244px] h-28 md:h-[262.21px] self-start"
          />
          <ul
            className={`flex flex-col items-start gap-4 pr-4 ${
              theme ? "text-white" : "text-black"
            } text-[10px] md:text-[16px]`}
          >
            <Link to="/">Home</Link>
            {/* <Link to="">About</Link>
                        <Link to="">Team</Link>
                        <Link to="">Blog</Link> */}
            <Link to="/community">Community</Link>
            <Link to="/event/hackathon">Hackathon Login</Link>
          </ul>
        </div>
        <div className="text-start flex flex-col items-start px-4 md:px-2 py-[2rem] w-[45%] ">
          <h3
            className={` ${
              theme ? "text-white" : "text-black"
            } text-[18px] md:text-[24px] font-semibold`}
          >
            Contact
          </h3>
          <p
            className={` ${
              theme ? "" : ""
            } text-blockchain-green text-[10px] md:text-[18px] font-medium`}
          >
            blockchainunn@gmail.com
          </p>

          <p
            className={` ${
              theme ? "text-white" : "text-black"
            } text-[10px] md:text-[24px] font-semibold mt-4`}
          >
            Lion Science Park, Off Sullivan Chime Drive
          </p>
          <p
            className={` ${
              theme ? "text-white" : "text-black"
            } text-[10px] md:text-[18px] font-semibold`}
          >
           By Green House Gate, UNN, Nsukka, Enugu state.
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col items-start justify-center w-full p-4 md:px-16 ${
          theme ? "text-white" : "text-black"
        } text-[10px] md:text-[16px]`}
      >
        <p className="mx-auto">
          Copyright © 2024 BlockchainUNN. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
