const Schedule = () => (
  <div className="w-[80%] xl:w-[60%] h-fit mx-auto flex flex-col items-center py-[12px] px-[18px] gap-4">
    <div className="w-full flex flex-col items-center  max-sm:h-[35px]  h-[70px] mb-6">
      <h2 className="max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
        <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
          EVENT SCHEDULE
        </span>
        <span className="absolute left-[1px] -top-[1px] text-stroke w-full self-center">
          EVENT SCHEDULE
        </span>
      </h2>
    </div>
    <div className="w-full flex flex-col gap-12 items-center justify-center mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 px-auto">
        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 1
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Mon 28th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Online Hackathon officially starts with workshops from sponsors.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 2
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Tue 29th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Online Hackathon day (2) two continues with the hackers and their
              teams.
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full sm:w-1/2 h-[150px] bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 3
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Wed 30th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Admissions to all registered participants into the hacker house
              for the physical phase.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 4
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Thur 31st October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Physical Hackathon day (2) two continues with hackers rounding up.
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full sm:w-1/2 h-[150px] bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 5
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Fri 1st November, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Judges will review and judge, and the top 10 projects get to do a
              physical presentation.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 6
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Sat 2nd November, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Conference 3.0 grand finale event for all techies. (Newbies,
              Designers Developers Content writers, e.t.c.)
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
