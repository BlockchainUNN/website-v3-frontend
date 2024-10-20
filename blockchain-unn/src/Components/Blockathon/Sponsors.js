import React from "react";
import lisk from "../../assets/lisk.png";
import Gida from "../../assets/gida1.png";
import alphablocks from "../../assets/alphablocks.png";
import technext from "../../assets/technext.png";
import arbitrum from "../../assets/arbitrum.png";
import teh from "../../assets/teh-logo.png";

const Sponsors = ({ sponsors, partners }) => {
  return (
    <div className="w-full px-6 py-8 space-y-12 bg-black text-white">
      <h1 className="text-[32px] md:text-[64px] font-bold mb-6 text-center">Sponsors</h1>

      {sponsors.map((sponsorLevel, index) => (
        <div
          key={index}
          className="space-y-4 w-full mx-auto flex flex-col items-center"
        >
          {/* Sponsor Level Title */}
          <h2 className="text-[20px] md:text-[28px] font-semibold">{sponsorLevel.level}</h2>

          {/* Logos Section */}
          <div className="flex overflow-x-scroll space-x-6 py-4 gap-12 px-4">
            {sponsorLevel.logos.map((logo, idx) => (
              <div className="box-shadow bg-black w-[272px] h-[144px] rounded-md flex flex-col items-center justify-center p-[16px]">
                <img
                  key={idx}
                  src={logo}
                  alt={`${sponsorLevel.level} sponsor logo ${idx}`}
                  className="h-auto w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <h1 className=" text-[32px] md:text-[64px] font-bold mb-6 text-center">Partners</h1>

      {partners.map((partnersLevel, index) => (
        <div
          key={index}
          className="space-y-4 w-full mx-auto flex flex-col items-center"
        >
          {/* Sponsor Level Title */}
          <h2 className="text-[20px] md:text-[28px] font-semibold text-center mb-4">{partnersLevel.level}</h2>

          {/* Logos Section */}
          <div className="my-8 w-full overflow-x-hidden">
            <div className="flex p-4 gap-[4rem] py-8 items-center w-full justify-center">
              {partnersLevel.logos.map((logo, idx) => (
                <div className="box-shadow bg-black w-[272px] md:h-[144px] h-[100px] rounded-md flex flex-col items-center justify-center p-[16px]">
                  <img
                    key={idx}
                    src={logo}
                    alt={`${partnersLevel.level} sponsor logo ${idx}`}
                    className="h-auto w-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Sample sponsor data
const sponsorData = [
  {
    level: "Platinum",
    logos: [arbitrum],
  },
//   {
//     level: "Gold",
//     logos: [avalanche],
//   },
//   {
//     level: "Silver",
//     logos: [arbitrum_nexus],
//   },
  {
    level: "Bronze",
    logos: [lisk],
  },
];

const partnerData = [
  {
    level: "Community / Ecosystem Partners",
    logos: [Gida, alphablocks],
  },
  {
    level: "Media Partners",
    logos: [technext, teh],
  },
];

// Main component to render the Sponsors
const SponsorsPage = () => {
  return <Sponsors sponsors={sponsorData} partners={partnerData} />;
};

export default SponsorsPage;
