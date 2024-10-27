const Home = () => {
  const rules = [
    "BlockchainUNN Conference 3.0 is happening in person.",
    "Hackers teams are made up of a maximum of 5 people.",
    "All projects must be related to blockchain.",
    "Minimum of 3 members of your team will need to be at the venue to be judged.",
    "No online submissions.",
  ];

  return (
    <div className="max-sm-420:w-[100%] w-[80%] xl:w-[60%] max-sm-420:h-fit h-[520px] mx-auto bg-white max-sm-420:rounded-2xl rounded-[26px] flex flex-col items-center py-[12px] max-sm-420:px-[6px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center max-sm:h-[35px] h-[70px] mb-3 max-sm-420:mb-0">
        <h2 className="max-sm-420:text-[1.5rem] max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            BLOCKATHON RULES
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            BLOCKATHON RULES
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-4 max-sm-420:gap-2">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="h-[61.56px] w-fit rounded-[11px] shadow-xl bg-white text-black font-raleway-semibold font-[700] max-sm-420:text-[0.875rem] text-[16px] flex items-center justify-center py-2 px-4"
          >
            {`0${index + 1}    ${rule}`}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
