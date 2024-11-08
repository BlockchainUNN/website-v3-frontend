const Schedule = () => {
  const schedule = [
    {
      day: "DAY 1",
      date: "Mon 28th October, 2024",
      text: "Online Hackathon officially starts with workshops from sponsors.",
    },
    {
      day: "DAY 2",
      date: "Tue 29th October, 2024",
      text: "Online Hackathon day (2) two continues with the hackers and their teams.",
    },
    {
      day: "DAY 3",
      date: "Wed 30th October, 2024",
      text: "Admissions to all registered participants into the hacker house for the physical phase.",
    },
    {
      day: "DAY 4",
      date: "Thur 31st October, 2024",
      text: "Physical Hackathon day (2) two continues with hackers rounding up.",
    },
    {
      day: "DAY 5",
      date: "Fri 1st November, 2024",
      text: "Judges will review and judge, and the top 10 projects get to do a physical presentation.",
    },
    {
      day: "DAY 6",
      date: "Sat 2nd November, 2024",
      text: "Conference 3.0 grand finale event for all techies. (Newbies, Designers Developers Content writers, e.t.c.)",
    },
  ];
  return (
    <div className="max-sm-420:w-full w-[80%] xl:w-[60%] h-fit mx-auto flex flex-col items-center py-[12px] max-sm-420:px-4 px-[18px] gap-4">
      <div className="w-full flex flex-col items-center  max-sm:h-[35px]  h-[70px] mb-6">
        <h2 className="max-sm-420:text-[1.5rem] max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            EVENT SCHEDULE
          </span>
          <span className="absolute left-[1px] -top-[1px] text-stroke w-full self-center">
            EVENT SCHEDULE
          </span>
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-12 items-center justify-center mx-auto">
        {schedule.map((item) => {
          return (
            <div className="relative w-full max-sm-420:w-full h-[150px]  bg-blockchain-white flex flex-col items-center max-sm-420:px-4 px-8 py-4">
              <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
                {item.day}
              </p>
              <div className="w-full flex flex-col items-start justify-center mt-3">
                <p className="text-black font-light text-[10px]">{item.date}</p>
                <h2 className="text-black font-semibold max-sm-420:text-[1rem] text-[18px] ">
                  {item.text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
