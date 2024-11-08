import React from "react";
import gold from "../../assets/icons/gold.svg";
import silver from "../../assets/icons/silver.svg";
import bronze from "../../assets/icons/bronze.svg";
import design from "../../assets/icons/design.svg";
import cash from "../../assets/icons/cash.png";
import winnertag from "../../assets/icons/winnertag.svg";

const Prizes = () => {
  return (
    <div className=" px-2 md:px-[2rem] xl:px-[4rem] py-12 flex flex-col items-center w-full">
      <h1 className="text-blockathon-green text-[25px] md:text-[80px] font-bold mb-4">
        PRIZES & RECOGNITION
      </h1>

      <div className="w-full md:w-[95%] xl:w-[80%] mb-12">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div className="flex flex-col items-center justify-center border gap-3 border-blockchain-green rounded-xl h-[350px] md:h-full w-auto bg-black relative">
            <p className="text-blockathon-green font-semibold mx-auto text-[1rem] -mb-3">
              Grand Prize
            </p>
            <h1 className="text-white font-extrabold text-[1rem] mx-auto md:text-[55px]">
              ₦3.2M ($2,000)
            </h1>
            <img
              src={winnertag}
              alt="winnertag"
              className=" w-[75px] md:w-[100px] h-[75px] md:h-[100px] scale-150 absolute -top-4 -left-2"
            />
            <img
              src={cash}
              alt="gold"
              className="w-[65%] h-[85px] md:h-[150px] scale-125 mt-4"
            />
          </div>
          <div className="w-auto flex flex-col gap-2">
            <div className="flex flex-col items-center gap-3 justify-center border border-blockchain-green rounded-xl h-full md:h-[222px] w-auto bg-black">
              <p className=" text-blockathon-green font-semibold text-[1rem] -mb-2">
                1st Prize
              </p>
              <h1 className="text-white font-[900] text-[1rem] md:text-[40px]">
                ₦1.6M ($1,000)
              </h1>
              <img
                src={gold}
                alt="silver"
                className="w-[60px] h-[40px] md:scale-125"
              />
            </div>
            <div className="flex flex-col items-center gap-3 justify-center border border-blockchain-green rounded-xl h-full md:h-[222px] w-auto bg-black">
              <p className=" text-blockathon-green font-semibold text-[1rem] -mb-2">
                2nd Prize
              </p>
              <h1 className="text-white font-[900] text-[1rem] md:text-[40px]">
                ₦1.04M ($650)
              </h1>
              <img
                src={silver}
                alt="silver"
                className="w-[60px] h-[40px] md:scale-125"
              />
            </div>

            <div className="flex flex-col items-center gap-3 justify-center border border-blockchain-green rounded-xl h-full md:h-[222px] w-auto bg-black">
              <p className=" text-blockathon-green font-semibold text-[1rem] -mb-2">
                3rd Prize
              </p>
              <h1 className="text-white font-[900] text-[1rem] md:text-[40px]">
                ₦560K ($350)
              </h1>
              <img
                src={bronze}
                alt="bronze"
                className="w-[60px] h-[40px] md:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
