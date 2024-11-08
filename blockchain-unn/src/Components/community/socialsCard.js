import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Link } from "react-router-dom";

export default function SocialsCard({ social, icon, content, to }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={to}
      className={
        " flex p-px bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 rounded-2xl cursor-pointer"
      }
    >
      <div
        className={
          (theme ? " bg-dark-mode-2 " : " bg-slate-100 ") +
          " flex flex-col w-full max-lg:p-6 max-sm:p-4 p-8 rounded-2xl font-raleway-semibold max-lg:gap-4 gap-6 shadow-xl"
        }
      >
        <span className="flex justify-center max-sm:w-10 max-sm:h-10 w-12 h-12 bg-blockchain-green rounded-md">
          {icon}
        </span>
        <span className=" max-lg:text-[1.2rem] max-sm-420:text-[1rem] text-[1.5rem] max-sm-420:leading-3 leading-4">
          {social}
        </span>
        <span className="text-[1rem] max-lg:text-[0.875rem] max-sm-420:text-[0.75rem] leading-4">
          {content}
        </span>
      </div>
    </Link>
  );
}
