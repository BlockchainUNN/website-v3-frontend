import React, { useRef, useState } from "react";
import financial from "../../assets/financial-inclusion.png";
import governance from "../../assets/governance.png";
import entertainment from "../../assets/entertainment.png";

const Categories = () => {
  const sliderRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const boxes = [
    { title: "E-Identity and Verification", image: financial, subtitle: "E-Identity and Verification", description: "Applications in e-identity and verification include digital stamps for e-commerce, cross-border trade, gun running prevention, and petroleum supply chain tracking." },
    { title: "Open Governance", image: governance, subtitle: "E-Identity and Verification", description: "Applications in e-identity and verification include digital stamps for e-commerce, cross-border trade, gun running prevention, and petroleum supply chain tracking." },
    { title: "Financial inclusion & Education", image: financial, subtitle: "E-Identity and Verification", description: "Applications in e-identity and verification include digital stamps for e-commerce, cross-border trade, gun running prevention, and petroleum supply chain tracking." },
    { title: "Entertainment & Media", image: entertainment, subtitle: "E-Identity and Verification", description: "Applications in e-identity and verification include digital stamps for e-commerce, cross-border trade, gun running prevention, and petroleum supply chain tracking." },
  ];

  return (
    <div className="bg-black px-2 xl:px-[2rem] my-[3rem] flex flex-col items-center justify-center w-full">
      <h1 className="text-white text-[30px] font-bold mb-4">Categories to build</h1>
      <div
        className="w-full flex flex-col md:flex-row items-center gap-4 justify-center py-[3rem] overflow-hidden whitespace-nowrap"
        ref={sliderRef}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`inline-block w-[85%] md:w-[324px] h-auto mx-2 text-white text-center transition-all duration-300 ease-in-out ${
              hoveredIndex === index ? "h-[400px]" : "h-[341px]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <div className="bg-dark-mode p-4 flex flex-col items-start justify-center h-[360px] w-full md:w-[306px] border border-blockathon-green">
                <h2 className="text-blockathon-green text-wrap max-w-[90%] px-4 font-semibold text-start mb-6">
                  {box.subtitle}
                </h2>
                <p className="font-bold text-[15px] text-white text-wrap max-w-[90%] text-start self-center">
                  {box.description}
                </p>
              </div>
            ) : (
              <div className="relative h-full border-gradient flex flex-col items-center justify-center text-center rounded-xl">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <p className="absolute top-1/2 left-auto font-bold text-[18px] text-black">
                  {box.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
