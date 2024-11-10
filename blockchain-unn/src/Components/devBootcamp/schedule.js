import React from "react";
import code from "../../assets/code.png";

const web2_schedule = [
  {
    day: "Classes 1-2",
    topic: "Introduction to Software Development.",
    description: "Tools explanations, installation and setup.",
  },
  {
    day: "Classes 3-4",
    topic: "HTML Fundamentals",
    description: "Understanding HTML structure and its applications. ",
  },
  {
    day: "Classes 5-7",
    topic: "CSS and Responsive Design principles",
    description: "Styling web pages and creating responsive layouts. ",
  },
  {
    day: "Classes 8",
    topic: "Introduction to Terminal Commands",
    description: "Basic terminal commands and navigation.",
  },
  {
    day: "Classes 9-10",
    topic: "Git and Github",
    description:
      "version control systems and collaborative workflows using GitHub.",
  },
  {
    day: "Classes 11-14",
    topic: "Javascript",
    description:
      "Introduction to Javascript fundamentals for dynamic web development.",
  },
  {
    day: "Classes 15-19",
    topic: "React",
    description: "Building interactive user interfaces using React.",
  },
  {
    day: "Classes 20",
    topic: "Deployment Platforms",
    description: "Deploying applications on Vercel, Render and Netlify.",
  },
  {
    day: "Classes 21-23",
    topic: "Node.js Basics using Express.js",
    description:
      "Introduction to server-side Javascript and building APIs with Ecpress.js.",
  },
  {
    day: "Classes 24-26",
    topic: "Introduction to AJAX",
    description: "Making asynchronous requests using JavaScript.",
  },
  {
    day: "Classes 27",
    topic: "Introduction to React",
    description: "React components, props, state and lifecycle methods.",
  },
  {
    day: "Classes 28",
    topic: "Introduction to React Router",
    description: "React Router components, props and navigation.",
  },
];

const web3_schedule = [
  {
    day: "Classes 1-2",
    topic: "Introduction to Blockchain Technologies.",
    description: "Overview of blockchain fundamentals and concepts.",
  },
  {
    day: "Classes 3-5",
    topic: "Introduction to Remix and Solidity",
    description:
      "Understanding smart contracts and writing solidity code using Remix.",
  },
  {
    day: "Classes 6-7",
    topic: "Introduction to Lisk",
    description:
      "Basics of the Lisk blockchain platform and its development environment.",
  },
  {
    day: "Classes 8",
    topic: "Implement an ERC-20 Token",
    description:
      "Step-by-step guide to creating and deploying an ERC-20 token.",
  },
  {
    day: "Classes 9-10",
    topic: "Introduction to Hardhat and Truffle",
    description: "Smart contract development frameworks: hardhat and Truffle.",
  },
  {
    day: "Classes 11",
    topic: "Deploying and Verifyign smart contracts on Etherscan",
    description:
      "Understanding how to deploy contracts and verify them on Etherscan.",
  },
  {
    day: "Classes 12-13",
    topic: "Understanding the ERC21 Protocol and NFTs",
    description: "In-depth understanding of ERC21, the foundation of NFTs.",
  },
  {
    day: "Classes 14-15",
    topic: "Example Project 1",
    description: "Building and implementing a practical Blockchain project.",
  },
  {
    day: "Classes 16-17",
    topic: "IUnit Testing / Smart Contract Testing",
    description: "Writing and executing testing tests for smart contracts.",
  },
  {
    day: "Classes 18-20",
    topic: "Upgradeable Smart Contracts",
    description: "Concepts and implementation of upgradeable smart contracts.",
  },
  {
    day: "Classes 21",
    topic: "Oracles",
    description: "Introduction to Oracle and their role in smart contract.",
  },
  {
    day: "Classes 22",
    topic: "Introduction to Chainlink Oracle",
    description:
      "Using Chainlink to integrate real-world data with smart contracts.",
  },
  {
    day: "Classes 23-24",
    topic: "Example Project 2: Build a Lottery Smart Contract",
    description: "Develop a lottery smart contract as a hands-on project.",
  },
  {
    day: "Classes 25-27",
    topic: "Building Frontend Clients",
    description: "Connecting smart contracts with frontend applications.",
  },
  {
    day: "Classes 28",
    topic: "Security",
    description:
      "Best practices for securing smart contracts and blockchain applications.",
  },
];

const Schedule = () => {
  return (
    <div className="w-full px-2 md:px-[6rem] flex flex-col items-center -mt-12">
      <div className="top-border w-full h-fit md:h-[251px] rounded-xl bg-dark-mode-4 flex flex-col-reverse items-end px-8 py-6 rotate-180">
        <p className="text-white opacity-60 font-wallpoet text-[20px] md:text-[40px] font-[400] leading-tight -rotate-180">
          WEB2 STREAM CURRICULUM
        </p>
        <p className="text-white -rotate-180 mb-2 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          The web2 stream is focused on students new to programming or already
          existing web2 devs looking to improve their skills. Since the goal is
          prepping the students for web3 development, we’d mostly be looking
          into the front-end side of web2 development.
        </p>
        <p className="text-white -rotate-180 mb-4 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          This stream runs for <span className="font-semibold">10 weeks</span>,
          providing <span className="font-semibold">28 contacts</span> in total.
        </p>
        {/* <p className="text-white -rotate-180 mb-4 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          Check below for Curriculum Summary
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
              <p className="text-[1rem] max-md:text-[0.875rem] font-[300] w-full overflow-hidden break-words">
                <span className="font-semibold">{schedule.topic}</span>
                <br />
                {schedule.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="top-border w-full h-fit md:h-[251px] rounded-xl bg-dark-mode-4 flex flex-col-reverse items-end px-8 py-6 rotate-180 mt-8">
        <p className="text-white opacity-60 font-wallpoet text-[20px] md:text-[40px] font-[400] leading-tight -rotate-180">
          WEB3 STREAM CURRICULUM
        </p>
        <p className="text-white -rotate-180 mb-2 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          The web3 stream is focused on already existing web2 devs looking to
          devle into web3 development. Knowledge of HTML, CSS, JS, and React is
          compulsory! We’ll be focused on building smart contracts on Ethereum
          Layer 2 Lisk using Solidity.
        </p>
        <p className="text-white -rotate-180 mb-4 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          This stream runs for <span className="font-semibold">10 weeks</span>,
          providing <span className="font-semibold">28 contacts</span> in total.
        </p>
        {/* <p className="text-white -rotate-180 mb-4 text-[1rem] max-md:text-[0.875rem] md:text-auto">
          Check below for Curriculum Summary
        </p> */}
      </div>

      <div className="w-full flex flex-wrap gap-4 items-end justify-evenly mt-8">
        {web3_schedule.map((schedule, index) => (
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
              <p className="text-[1rem] max-md:text-[0.875rem] font-[300] w-full overflow-hidden break-words">
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
            <img src={code} alt="web2" className="h-full w-full p-6" />
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
                Project Submission
              </p>
              <p className="text-white md:max-w-[85%] rotate-180 md:text-auto text-[14px]">
                After the bootcamp is over, participant are required to build a
                project using the skills acquired and submit it by the end of
                the bootcamp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
