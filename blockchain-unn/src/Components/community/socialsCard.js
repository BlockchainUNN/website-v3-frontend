import { useContext } from "react";
import { ThemeContext } from "../Theme";

export default function SocialsCard({ social, icon, content }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        " flex p-px bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 rounded-2xl"
      }
    >
      <div
        className={
          (theme ? " bg-dark-mode-2 " : " bg-slate-100 ") +
          " flex flex-col w-full p-8 rounded-2xl font-raleway-semibold gap-6 shadow-xl"
        }
      >
        <span className="flex justify-center w-12 h-12 bg-blockchain-green rounded-md">
          {icon}
        </span>
        <span className=" text-[1.5rem] leading-4">{social}</span>
        <span className="text-[1rem] leading-4">{content}</span>
      </div>
    </div>
  );
}
