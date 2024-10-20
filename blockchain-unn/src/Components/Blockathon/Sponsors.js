import React from "react";
import lisk from "../../assets/lisk.png";
import Gida from "../../assets/gida.png";
import garage from "../../assets/garage.svg";
import alphablocks from "../../assets/alphablocks.png";
import gdsc from "../../assets/gdsc.png";

const Sponsors = ({ sponsors, partners }) => {
  return (
    <div className="w-full px-6 py-8 space-y-12 bg-black text-white">
      <h1 className="text-[64px] font-bold mb-6 text-center">Sponsors</h1>

      {sponsors.map((sponsorLevel, index) => (
        <div
          key={index}
          className="space-y-4 w-full mx-auto flex flex-col items-center"
        >
          {/* Sponsor Level Title */}
          <h2 className="text-2xl font-semibold">{sponsorLevel.level}</h2>

          {/* Logos Section */}
          <div className="flex overflow-x-scroll space-x-6 py-4 gap-12 px-4">
            {sponsorLevel.logos.map((logo, idx) => (
              <div className="box-shadow bg-black w-[272px] h-[144px] rounded-md flex flex-col items-center justify-center p-[16px]">
                <img
                  key={idx}
                  src={logo}
                  alt={`${sponsorLevel.level} sponsor logo ${idx}`}
                  className="h-full w-3/4"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <h1 className="text-[64px] font-bold mb-6 text-center">Partners</h1>

      {partners.map((partnersLevel, index) => (
        <div
          key={index}
          className="space-y-4 w-full mx-auto flex flex-col items-center"
        >
          {/* Sponsor Level Title */}
          <h2 className="text-2xl font-semibold">{partnersLevel.level}</h2>

          {/* Logos Section */}
          <div className="flex overflow-x-scroll space-x-6 py-4 gap-12 px-4">
            {partnersLevel.logos.map((logo, idx) => (
              <div className="box-shadow bg-black w-[272px] h-[144px] rounded-md flex flex-col items-center justify-center p-[16px]">
                <img
                  key={idx}
                  src={logo}
                  alt={`${partnersLevel.level} sponsor logo ${idx}`}
                  className="h-full w-3/4"
                />
              </div>
            ))}
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
    logos: [lisk, lisk, lisk],
  },
  {
    level: "Gold",
    logos: [lisk, lisk, lisk],
  },
  {
    level: "Silver",
    logos: [lisk, lisk, lisk],
  },
  {
    level: "Bronze",
    logos: [lisk, lisk, lisk],
  },
];

const partnerData = [
  {
    level: "Community / Ecosystem Partners",
    logos: [garage, Gida, alphablocks, gdsc],
  },
  {
    level: "Media Partners",
    logos: [lisk, lisk, lisk],
  },
];

// Main component to render the Sponsors
const SponsorsPage = () => {
  return <Sponsors sponsors={sponsorData} partners={partnerData} />;
};

export default SponsorsPage;
