import React from "react";
import content from "../../assets/content.png";

const web2_schedule = [
  {
    day: "Week 1  Thursday",
    topic: "Introduction to Basics of web3 content writing.",
    description: "Overview, goals and introduction to web3 content writing.",
  },
  {
    day: "Week 1 Saturday",
    topic: "Creatign a blog and content Calendar",
    description: "Guide to starting a blog, setting up a content schedule. ",
  },
  {
    day: "Week 2 Thursday",
    topic: "Writing your first web3 Article",
    description: "Researching and drafting a web3 focused article. ",
  },
  {
    day: "Week 2 Saturday",
    topic: "AI Tools & CHATGPT for writers",
    description: "Practical tips on using AI tools like CHATGPT.",
  },
  {
    day: "Week 3 Thursday",
    topic: "Building an Engaging Twitter Thread",
    description: "Techniques for crafting impactful Twitter threads.",
  },
  {
    day: "Week 3 Saturday",
    topic: "LinkedIn Optimization and Job Pitching",
    description:
      "Tips on LinkedIn profile optimization and pitching effectively.",
  },
  {
    day: "Week 4 Thursday",
    topic: "How i got my first Content Writing Job",
    description:
      "Guest panel sharing first-job experience in content writing..",
  },
  {
    day: "Week 4 Saturday",
    topic: "Twitter Profile Optimization",
    description: "Enhancing visibility and engagement on twitter.",
  },
  {
    day: "Week 5 Thursday",
    topic: "Community Manangement in Web3",
    description:
      "trategies for building and managing web3 communities through content.",
  },
  {
    day: "Week 5 Saturday",
    topic: "LinkedIn, Upwork & Freelance Platforms",
    description: "Navigating Upwork and other job platforms.",
  },
  {
    day: "Week 6 Thursday",
    topic:
      "Soft Skills for writers: Public Speaking (Understanding the business side of writing)",
    description:
      "Communication and presentation skills for professional growth.",
  },
  {
    day: "Week 6 Saturday",
    topic: "Linkedin Optimization and Job Pitching",
    description:
      "Tips on Linkedin profile optimization and pitching effectively.",
  },
];

const Schedule = () => {
  return (
    <div className="w-full px-2 md:px-[6rem] flex flex-col items-center -mt-12">
      <div className="top-border w-full h-fit rounded-xl bg-dark-mode-4 flex flex-col-reverse items-end px-8 py-6 rotate-180">
        <p className="text-white opacity-60 font-wallpoet text-[20px] md:text-[40px] font-[400] leading-tight -rotate-180">
          CONTENT CURRICULUM
        </p>
        <p className="text-white -rotate-180 mb-2 text-base max-md:text-[0.875rem] md:text-auto">
          The bootcam will have focus on 3 stacks in Content and Marketing,{" "}
          <span className="font-semibold">
            (Content, Social media Management and Community Management)
          </span>
          .
        </p>
        <p className="text-white -rotate-180 mb-4 text-base max-md:text-[0.875rem] md:text-auto">
          This bootcamp runs for <span className="font-semibold">6 weeks</span>.
        </p>
        {/* <p className="text-white -rotate-180 mb-4 text-base max-md:text-[875rem] md:text-auto">
          Check below for Curriculum
        </p> */}
      </div>

      <div className="w-full flex flex-wrap gap-4 items-end mt-8 justify-evenly">
        {web2_schedule.map((schedule, index) => (
          <div
            key={index}
            className={`w-full md:w-[32%] h-[120px] md:h-[171px] p-1 rounded-[7px] ${
              index % 2 === 0
                ? "bg-white text-black"
                : "bg-dark-mode-3 text-white top-border"
            }`}
          >
            <div className="flex flex-col gap-4 p-4 rounded-xl">
              <h3 className="text-[13px] md:text-[18px] font-medium">
                {schedule.day}
              </h3>
              <p className="text-base max-md:text-[0.875rem] font-[300] w-full overflow-hidden break-words">
                <span className="font-semibold">{schedule.topic}</span>
                <br />
                {schedule.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="top-border w-full h-fit rounded-xl bg-dark-mode-4 flex flex-col-reverse items-end px-2 md:px-8 py-6 rotate-180 mt-8">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-4 items-center p-0 md:p-6">
          <div className="top-border w-full rounded-xl bg-dark-mode-3 -rotate-180 -mb-4">
            <img src={content} alt="web2" className="h-full w-full p-6" />
          </div>
          <div className="flex flex-col gap-8 w-[90%] md:w-auto">
            {/* <div className="top-border w-full md:w-[540px] h-[150px] md:h-[181px] rounded-xl bg-dark-mode-3 rotate-0 md:-mb-4 px-4 md:p-6 flex flex-col-reverse items-end">
              <p className="text-white opacity-60 font-wallpoet text-[22px] md:text-[40px] font-[400] leading-tight rotate-180 my-2">
                Twitter Spaces
              </p>
              <p className="text-white md:max-w-[85%] rotate-180 md:text-auto text-[14px]">
                We will have 2 Twitter spaces: one at the start of the bootcamp
                and another at the end.
              </p>
            </div> */}
            <div className="top-border w-full md:w-[540px] h-[150px] md:h-[181px] rounded-xl bg-dark-mode-3 rotate-0 md:-mb-4 px-4 md:p-6 flex flex-col-reverse items-end">
              <p className="text-white opacity-60 font-wallpoet text-[22px] md:text-[40px] font-[400] leading-tight rotate-180 my-2">
                Writing Competition
              </p>
              <p className="text-white md:max-w-[85%] rotate-180 md:text-auto text-[14px]">
                After the bootcamp is over, participants are required to craft a
                compelling piece using the skills they've acquired and submit it
                by the end of the bootcamp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
