import { TbFlag3 } from "react-icons/tb";
import AboutUsCard from "./aboutUsCards";
import visionIcon from "../../assets/icons/ourVision.svg";
import valuesIcon from "../../assets/icons/ourvalue.svg";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full gap-24">
      <div className="flex flex-col w-full text-center font-raleway gap-6">
        <h1 className="text-blockchain-green font-raleway-black text-[1.75rem] leading-none uppercase">
          about us
        </h1>
        <h2 className="font-raleway-black text-[3.5rem] text-balance leading-[4rem]">
          Expanding the blockchainunn community and introducing web3.
        </h2>
        <span className="flex text-[1.5rem] font-raleway text-balance mx-auto w-[51rem]">
          BlockchainUNN is a Tech community established with the aim of
          educating members of the University Community with both basic and
          advanced practical knowledge of cryptocurrency, Blockchain technology,
          its development, and its opportunities. Though we are focused on the
          University of Nigeria, we have a diverse community made up of people
          from diverse fields, institutions and campuses who are blockchain
          enthusiasts.
        </span>
      </div>

      <div className="flex gap-14 py-10 mx-auto justify-center">
        <AboutUsCard
          title={"Our Mission"}
          icon={
            <TbFlag3 className="my-auto " size={"2.25rem"} color="#d8d8d8" />
          }
          content={
            "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology."
          }
        />
        <AboutUsCard
          title={"Our Vision"}
          icon={
            <img
              className="w-7 h-7 my-auto"
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
              className="w-7 h-7 my-auto"
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
