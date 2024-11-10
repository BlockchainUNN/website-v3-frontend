import React from "react";
import blockathonMini from "../../assets/blockchainunn-white.png";
import SocialLink from "../socialLink copy";

const Footer = () => {
  return (
    <div className="bg-black/20 text-white pt-6 pb-6 px-2 md:px-[4rem] w-full h-[200px] md:h-[328px] flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-2 md:gap-[20%] justify-between items-center mt-8">
        <div className="flex flex-col items-start w-auto px-2 md:px-[4rem]">
          <img src={blockathonMini} alt="" className="w-[20rem] object-cover" />
        </div>

        <div className="flex flex-col items-center justify-start w-auto px-2 md:px-[4rem]">
          <p className="font-light text-[12px] md:text-[16px] mt-2 md:-mt-4 mb-2 md:mb-6">
            FOLLOW US
          </p>
          <div className="flex items-center gap-4">
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
      <p className="text-center font-sans font-light text-[10px] md:text-[16px] ">
        Copyright &copy; 2024 BlockchainUNN. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
