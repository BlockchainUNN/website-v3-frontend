import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import financial from "../../assets/financial-inclusion.png";
import governance from "../../assets/governance.png";
import entertainment from "../../assets/entertainment.png";
import prevArrow from "../../assets/icons/previous-icon.svg";
import nextArrow from "../../assets/icons/next-icon.svg";

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const boxes = [
    {
      title: "Real World Assets (RWAs)",
      image: financial,
      subtitle: "Real World Assets (RWAs)",
      description:
        "Applications on Real World Assets (RWAs) - digital representations of physical assets on the blockchain. These assets can range from real estate, commodities, and art to financial instruments like bonds and stocks, etc.",
    },
    {
      title: "Digital Collectibles",
      image: financial,
      subtitle: "Digital Collectibles",
      description:
        "Applications in Digital Collectibles - preservation of African artifacts and promotion of digital tourism, etc.",
    },
    {
      title: "Open Governance",
      image: governance,
      subtitle: "Open Governance",
      description:
        "Applications on Open Governance - utilizing smart contracts in the African Electoral process; voter registration, casting, and collation of votes, diaspora voting, using zk technology to anonymize casted votes, etc.",
    },
    {
      title: "Financial inclusion & Education",
      image: financial,
      subtitle: "Financial inclusion & Education",
      description:
        "Applications in Financial Inclusion (DEFI) and Education - promoting financial literacy, inclusion and education; decentralized finance (DeFi) platforms for microloans and savings, blockchain-based identity solutions for the unbanked, and educational tools leveraging smart contracts to create transparent and verifiable certification processes. ",
    },
    {
      title: "Entertainment & Media",
      image: entertainment,
      subtitle: "E-Identity and Verification",
      description:
        "Applications in Entertainment and media - artist management, music, and content distribution, copyrights, IP, etc.",
    },
    {
      title: "Open Idea",
      image: financial,
      subtitle: "Open Idea",
      description: "General Category - Open Idea; Surprise us.",
    },
  ];

  // Check screen width for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 620);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Implement intersection observer for scrolling on mobile
  useEffect(() => {
    if (isMobile) {
      const observers = boxes.map((_, index) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleIndices((prev) => {
                    if (!prev.includes(index)) {
                      return [...prev, index];
                    }
                    return prev;
                  });
                }, 2000); // 2-second delay
              } else {
                setVisibleIndices((prev) => prev.filter((i) => i !== index));
              }
            });
          },
          { threshold: 0.5 }
        );

        const element = document.getElementById(`box-${index}`);
        if (element) observer.observe(element);

        return observer;
      });

      return () => {
        observers.forEach((observer) => observer.disconnect());
      };
    }
    // eslint-disable-next-line
  }, [isMobile]);

  // Check visibility of boxes on scroll or hover
  const isVisible = (index) => {
    return isMobile ? visibleIndices.includes(index) : hoveredIndex === index;
  };

  // Render individual boxes
  const renderBox = (box, index) => (
    <div
      key={index}
      id={`box-${index}`}
      className={`flex items-center justify-center w-[85%] md:w-[384px] h-[384px] mx-auto text-white text-center transition-all duration-300 ease-in-out ${
        isVisible(index) ? "h-[384px]" : "h-[384px]"
      }`}
      onMouseEnter={() => !isMobile && setHoveredIndex(index)}
      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
    >
      {isVisible(index) ? (
        <div className="bg-dark-mode p-4 flex flex-col items-start justify-center h-[384px] w-full md:w-[306px] border border-blockathon-green">
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
  );

  return (
    <div className="bg-black px-2 xl:px-[2rem] my-[3rem] flex flex-col items-center justify-center w-full">
      <h1 className="text-white text-[30px] font-bold mb-12">
        Categories to build
      </h1>
      {isMobile ? (
        <div className="w-full flex flex-col items-center gap-4 justify-center py-[3rem] overflow-hidden whitespace-nowrap">
          {boxes.map((box, index) => renderBox(box, index))}
        </div>
      ) : (
        <div className="relative w-full custom-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            className="w-full py-[3rem]"
          >
            {boxes.map((box, index) => (
              <SwiperSlide key={index}>
                {renderBox(box, index)}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev w-[50px] h-[50px] absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
            <img src={prevArrow} alt="Previous" className="w-full h-full" />
          </div>
          <div className="custom-next w-[50px] h-[50px] absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
            <img src={nextArrow} alt="Next" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
