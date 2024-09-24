import { useContext } from "react";
import { ThemeContext } from "../Theme";

export default function AboutUsCard({ title, icon, content }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme
          ? "p-px bg-gradient-to-b from-[#13B93F] to-[#6DBB82] rounded-2xl "
          : "") + "flex w-full "
      }
    >
      <div
        className={
          (theme ? " bg-[#000C03] " : " bg-[#EDEDED] ") +
          "flex w-full flex-col gap-8 rounded-2xl py-12 px-8 drop-shadow-xl shadow-xl"
        }
      >
        <div className="flex w-full justify-start">
          <span className="flex justify-center w-[4.5rem] h-[4.5rem] bg-blockchain-green rounded-full">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <span className="font-semibold text-[1.5rem]">{title}</span>
          <span className="w-[17rem] text-pretty text-[1.2rem] leading-6">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
