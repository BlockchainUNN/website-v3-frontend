const Project = () => {
  return (
    <div className="w-[80%] xl:w-[60%] h-fit mx-auto bg-white rounded-[26px] flex flex-col items-center py-[20px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center max-sm:h-[35px] h-[70px] mb-3">
        <h2 className="max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            PROJECT OVERVIEW
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            PROJECT OVERVIEW
          </span>
        </h2>
      </div>

      <div className="w-[80%] min-h-[18rem]">
        <div className="text-balance text-center font-raleway text-[1.2rem]">
          Your team hasn't added any projects. <br />
          Ready to submit? Head over to the{" "}
          <button
            className="underline"
            onClick={() => {
              window.location.hash = "submit";
            }}
          >
            Submit Tab
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
