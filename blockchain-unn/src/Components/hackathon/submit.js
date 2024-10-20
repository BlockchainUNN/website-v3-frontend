import React, { useState } from "react";
import not_ready from "../../assets/icons/not-submission.svg";
import close_svg from "../../assets/icons/close-svg.svg";
import projectName from "../../assets/icons/submit-name.svg";
import { CustomSelect } from "./customSelect";
import { HackerButton } from "./button";

const Submit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative w-[80%] xl:w-[60%] min-h-[520px] mx-auto bg-white rounded-[26px] flex flex-col items-center py-[12px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center relative max-sm:h-[35px] h-[70px] mb-3">
        <h2 className="max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            SUBMIT PROJECT
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            SUBMIT PROJECT
          </span>
        </h2>

        <div className="absolute flex h-full right-[2rem]">
          <div className="flex gap-2 my-auto pt-8 ">
            <button
              onClick={() => setStep(1)}
              className="w-6 h-2 bg-black"
            ></button>
            <button
              onClick={() => setStep(2)}
              className={(step === 2 ? "bg-black " : "bg-grey-3 ") + " w-6 h-2"}
            ></button>
          </div>
        </div>
      </div>

      <div
        className={
          (step === 1 ? "flex " : "hidden ") + " flex-col w-full gap-3"
        }
      >
        <Input icon={projectName} placeholder={"Project Name"} />
        <CustomSelect
          placeholder="Select a Category"
          options={[
            "Real World Assets (RWAs)",
            "Digital Collectibles",
            "Open Governance",
            "Financial inclusion & Education",
            "Entertainment & Media",
            "Open Idea",
          ]}
        />
        <TextBox icon={projectName} placeholder={"Description of Project"} />
        <Input icon={projectName} placeholder={"Live Link"} />
      </div>

      <div
        className={
          (step === 2 ? "flex " : "hidden ") + " flex-col w-full gap-3"
        }
      >
        <Input icon={projectName} placeholder={"GitHub Link"} />
        <Input icon={projectName} placeholder={"Demo video link"} />
        <Input icon={projectName} placeholder={"Documentation link"} />
        <Input icon={projectName} placeholder={"Upload images"} />
      </div>

      <div className="flex w-full pb-6 pt-2">
        <HackerButton
          onclick={() => {
            if (step === 1) {
              setStep(2);
              return;
            }

            setModalOpen(true);
          }}
          text={step === 1 ? "Next" : "Submit"}
        />
      </div>
      {modalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[26px]">
          <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-lg text-center w-[88%] h-[85%]">
            <img
              src={close_svg}
              onClick={closeModal}
              alt="Close Modal"
              className="cursor-pointer w-[33.59px] h-[33.65px] self-end"
            />
            <h3 className="text-[36px] font-raleway-semibold">
              Hasn't started
            </h3>
            <p className="text-[24px] font-raleway-medium mb-[4rem]">
              Submission starts on the 29th of October
            </p>

            <img
              src={not_ready}
              alt="Not Ready"
              className="w-[226px] h-[194.31px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Submit;

export const Input = ({ icon, placeholder, className, onchange, value }) => {
  return (
    <div
      className={
        " flex gap-2 border border-black rounded-md text-grey-2 mx-10 px-5 py-3 " +
        (className ? className : "")
      }
    >
      <div className="my-auto">
        <img src={icon} alt={placeholder} />
      </div>
      <input
        onChange={onchange}
        value={value}
        className="font-raleway text-[1.3rem] flex w-full border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

const TextBox = ({ icon, placeholder }) => {
  return (
    <div className="flex gap-2 border border-black rounded-md text-grey-2 mx-10 px-5 py-3">
      <div className="">
        <img src={icon} alt={placeholder} />
      </div>
      <textarea
        className="font-raleway text-[1.3rem] min-h-[2rem] h-[8rem] flex w-full border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
