import { useContext } from "react";
import { ThemeContext } from "../Theme";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme ? " bg-dark-mode-2 " : " bg-white1 ") +
        " flex py-4 px-14 drop-shadow-custom mx-auto "
      }
    >
      <span
        className={
          (theme
            ? " font-outline-2 bg-gradient-to-b from-[#D9D9D966] to-[#7373731A] "
            : "bg-gradient-to-b from-[#10F04C] to-[#053010] ") +
          " text-transparent text-[4rem] bg-clip-text font-raleway-black"
        }
      >
        The Community
      </span>
    </div>
  );
}
