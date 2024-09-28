import { useContext } from "react";
import { ThemeContext } from "../Theme";

export default function AboutUsCard({ title, icon, content }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme
          ? "p-px bg-gradient-to-b from-[#13B93F] to-[#6DBB82] rounded-2xl "
          : "") + "flex w-full max-lg:w-fit "
      }
    >
      <div
        className={
          (theme ? " bg-[#000C03] " : " bg-[#EDEDED] ") +
          "flex w-full max-lg:w-fit flex-col gap-8 max-lg:gap-6 max-sm:gap-4 rounded-2xl py-12 max-lg:py-8 px-4 drop-shadow-xl shadow-xl"
        }
      >
        <div className="flex w-full justify-start">
          <span className="flex justify-center max-sm:w-[3.5rem] max-sm:h-[3.5rem] w-[4.5rem] h-[4.5rem] bg-blockchain-green rounded-full">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-4 max-lg:gap-2 w-full">
          <span className="font-semibold max-sm:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem]">
            {title}
          </span>
          <span className="w-[17rem] max-sm:w-[10rem] max-lg:w-[15rem] text-pretty max-sm:text-[0.875rem] max-lg:text-base text-[1.2rem] max-sm:leading-5 leading-6">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
