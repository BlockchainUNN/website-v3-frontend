import React from "react";
import blockathonMini from "../../assets/events/blockathon-mini.svg";
import SocialLink from "../socialLink";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-12 pb-6 px-2 md:px-[4rem] w-full">
      <div className="grid grid-cols-2 gap-2 md:gap-[20%] justify-between items-center">
        <div className="flex flex-col items-start w-auto px-2 md:px-[4rem]">
          <img
            src={blockathonMini}
            alt=""
            className="w-[150px] md:w-[300px] h-[60px] md:h-[120px object-fit"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-auto px-2 md:px-[4rem]">
          <p className="font-light text-[12px] md:text-[16px] mt-2 md:-mt-4 mb-2 md:mb-6">
            FOLLOW US
          </p>
          <div className="flex items-center gap-2">
            <SocialLink
              to={"https://www.linkedin.com/company/blockchainunn/"}
              type={"linkedin"}
            />
            <SocialLink to={"https://t.me/BlockchainUNN/1"} type={"telegram"} />
            <SocialLink to={"https://x.com/BlockchainUNN"} type={"x"} />
            <SocialLink
              to={"https://www.instagram.com/blockchainunn"}
              type={"instagram"}
            />
          </div>
        </div>
      </div>
      <p className="text-center my-8 md:my-4 font-sans font-light text-[10px] md:text-[16px] ">
        Copyright &copy; 2024 BlockchainUNN. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
