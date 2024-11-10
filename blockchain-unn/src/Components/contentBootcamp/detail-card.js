import React, { useState, useEffect } from "react";

const cardData = [
  {
    id: 1,
    description:
      "Emails with meeting links will be sent beforehand to all registered participants.",
    style: {
      top: "10%",
      left: "8.5%",
      width: "268.17px",
      height: "182.47px",
      rotate: "-10deg",
    },
    mobileStyle: {
      top: "10%",
      left: "2%",
      width: "162.59px",
      height: "110.47px",
      rotate: "-10deg",
    },
  },
  {
    id: 2,
    description:
      "All classes will hold on Gmeet and will be recorded to be upload later to the BlockchainUNN youtube channel",
    style: {
      top: "10%",
      left: "27%",
      width: "327.9px",
      height: "178.02px",
      rotate: "9deg",
      zIndex: "10",
    },
    mobileStyle: {
      top: "10%",
      left: "44%",
      width: "198.17px",
      height: "107.47px",
      rotate: "10deg",
    },
  },
  {
    id: 3,
    description:
      "Each class will be led by 2 persons, The main instructor and an assistant teacher to help with attendance and questions",
    style: {
      top: "11%",
      left: "50%",
      width: "327.9px",
      height: "178.02px",
      rotate: "-3deg",
      zIndex: "2",
    },
    mobileStyle: {
      top: "22.5%",
      left: "1%",
      width: "162.17px",
      height: "110.47px",
      rotate: "-10deg",
      zIndex: "3",
    },
  },
  {
    id: 4,
    description: "Attendance will be taken for every class by the cohort lead",
    style: {
      top: "10%",
      left: "72%",
      width: "292.32px",
      height: "178.02px",
      rotate: "3deg",
      zIndex: "5",
    },
    mobileStyle: {
      top: "21%",
      left: "45%",
      width: "198.17px",
      height: "107.47px",
      rotate: "10deg",
      zIndex: "2",
    },
  },
  {
    id: 5,
    description:
      "an assignment will be given every Tuesday, covering topics within that week, to be submitted by the next Tuesday (a duration of 1 week). Students are expected to submit a total of 14 assignments by the end of the bootcamp.",
    style: {
      top: "31%",
      left: "10.5%",
      width: "393.52px",
      height: "182.47px",
      rotate: "-10deg",
      zIndex: "1",
    },
    mobileStyle: {
      top: "36%",
      left: "1%",
      width: "358.17px",
      height: "88.47px",
      rotate: "2deg",
      zIndex: "4",
    },
  },
  {
    id: 6,
    description:
      "Assignments given will form critical criteria for graduation.",
    style: {
      top: "29%",
      left: "37.5%",
      width: "327.9px",
      height: "178.02px",
      rotate: "9deg",
      zIndex: "2",
    },
    mobileStyle: {
      top: "46.5%",
      left: "1%",
      width: "148.17px",
      height: "100.47px",
      rotate: "10deg",
      zIndex: "4",
    },
  },
  {
    id: 7,
    description:
      "an assignment will be given every Thursday, covering topics within that week, to be submitted by the next Thursday (a duration of 1 week). Students are expected to submit a total of 6-7 assignments by the end of the bootcamp.",
    style: {
      top: "32%",
      left: "60%",
      width: "455.64px",
      height: "178.02px",
      rotate: "-4deg",
      zIndex: "3",
    },
    mobileStyle: {
      top: "48%",
      left: "42%",
      width: "210.17px",
      height: "120.47px",
      rotate: "-10deg",
      zIndex: "5",
    },
  },
  {
    id: 8,
    description:
      "Graduation will be determined by 2 major criteria- 60% attendance to classes and 70% assignment and classwork completion",
    style: {
      top: "52%",
      left: "12%",
      width: "520.4px",
      height: "182.47px",
      rotate: "-10deg",
      zIndex: "1",
    },
    mobileStyle: {
      top: "61%",
      left: "8.5%",
      width: "268.17px",
      height: "128.47px",
      rotate: "12deg",
      zIndex: "4",
    },
  },
  {
    id: 9,
    description:
      "Upon graduation, Students are awarded a certificate of excellence and added to the BlockchainUNN Alumni group",
    style: {
      top: "51%",
      left: "49%",
      width: "606.84px",
      height: "178.02px",
      rotate: "3.5deg",
      zIndex: "5",
    },
    mobileStyle: {
      top: "76%",
      left: "0%",
      width: "358px",
      height: "120.47px",
      rotate: "-10deg",
      zIndex: "6",
    },
  },
];

const Card = ({ description, style, mobileStyle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute p-1 border-1 border-transparent bg-gradient-to-r from-[#2CE85E] via-[#2CE85E] to-[#202020] bg-clip-border rounded-xl md:rounded-3xl"
      style={isMobile ? mobileStyle : style}
    >
      <div className="bg-black w-full h-full rounded-xl md:rounded-3xl z-50 text-white px-2 md:px-6 py-2 md:py-4 text-center flex flex-col items-center justify-center">
        <p className="text-[10px] md:text-[16px] font-[500] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const DetailCardContainer = () => {
  return (
    <div className="bg-transparent relative w-full h-[860px]">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          style={card.style}
          mobileStyle={card.mobileStyle}
        />
      ))}
    </div>
  );
};

export default DetailCardContainer;
