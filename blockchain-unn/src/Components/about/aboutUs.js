import AboutUsCard from "./aboutUsCards";
import visionIcon from "../../assets/icons/ourVision.svg";
import valuesIcon from "../../assets/icons/ourvalue.svg";
import missionIcon from "../../assets/icons/flag.svg";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full gap-24 max-lg:gap-16 max-sm:gap-6 max-md:gap-12">
      <div className="flex flex-col w-full text-center font-raleway gap-6 max-md:gap-4">
        <h1 className="text-blockchain-green font-raleway-black max-md:text-[1.2rem] max-lg:text-[1.5rem] text-[1.75rem] leading-none uppercase  max-sm-420:text-red-500 max-sm:text-blue-500 max-md:text-yellow-500 max-lg:text-orange-500">
          about us
        </h1>
        <h2 className="font-raleway-black max-sm:text-[1.5rem] max-md:text-[2rem] max-lg:text-[3rem] text-[3.5rem] text-balance max-sm:leading-[2rem] max-md:leading-[3rem] max-lg:leading-[3.5rem] leading-[4rem]">
          Expanding the blockchainunn community and introducing web3.
        </h2>
        <span className="flex max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] font-raleway text-balance mx-auto  max-sm-420:w-[20rem] max-sm:w-[26rem] max-md:w-[32rem] max-lg:w-[40rem] w-[51rem]">
          BlockchainUNN is a Tech community established with the aim of
          educating members of the University Community with both basic and
          advanced practical knowledge of cryptocurrency, Blockchain technology,
          its development, and its opportunities. Though we are focused on the
          University of Nigeria, we have a diverse community made up of people
          from diverse fields, institutions and campuses who are blockchain
          enthusiasts.
        </span>
      </div>

      <div className="flex gap-14 max-lg:gap-8 max-sm:gap-4 max-lg:flex-wrap max-sm:py-4 py-10 max-md:py-6 mx-auto justify-center">
        <AboutUsCard
          title={"Our Mission"}
          icon={
            <img
              className="max-sm:w-5 w-7 max-sm:h-5 h-7 my-auto"
              src={missionIcon}
              alt="Our Mission Icon"
            />
          }
          content={
            "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology."
          }
        />
        <AboutUsCard
          title={"Our Vision"}
          icon={
            <img
              className="max-sm:w-5 w-7 max-sm:h-5 h-7 my-auto"
              src={visionIcon}
              alt="Our Vision Icon"
            />
          }
          content={
            "Our vision is to build tomorrow’s technology today. We educate and empower the next generation of blockchain users and developers"
          }
        />
        <AboutUsCard
          title={"Our Values"}
          icon={
            <img
              className="max-sm:w-5 w-7 max-sm:h-5 h-7 my-auto"
              src={valuesIcon}
              alt="Our Values Icon"
            />
          }
          content={
            "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology."
          }
        />
      </div>
    </div>
  );
}
