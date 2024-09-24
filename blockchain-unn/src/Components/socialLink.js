import { Link } from "react-router-dom";
import xLogo from "../assets/socials/x-black.svg";
import linkedInLogo from "../assets/socials/linkedIn-black.svg";
import instagramLogo from "../assets/socials/instagram-black.svg";
import telegramLogo from "../assets/socials/telegram-black.svg";
import xLogoLight from "../assets/socials/x.svg";
import linkedInLogoLight from "../assets/socials/linkedIn.svg";
import instagramLogoLight from "../assets/socials/instagram.svg";
import telegramLogoLight from "../assets/socials/telegram.svg";
import { ThemeContext } from "./Theme";
import { useContext } from "react";

const SocialLink = ({ to, type }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      className="flex justify-center border border-blockchain-green bg-blockchain-green/15 w-6 h-6"
      to={to}
    >
      {theme ? (
        <img
          className="my-auto w-3 h-3"
          src={
            type === "x"
              ? xLogoLight
              : type === "linkedin"
              ? linkedInLogoLight
              : type === "telegram"
              ? telegramLogoLight
              : instagramLogoLight
          }
          alt={type + " logo"}
        />
      ) : (
        <img
          className="my-auto w-3 h-3"
          src={
            type === "x"
              ? xLogo
              : type === "linkedin"
              ? linkedInLogo
              : type === "telegram"
              ? telegramLogo
              : instagramLogo
          }
          alt={type + " logo"}
        />
      )}
    </Link>
  );
};

export default SocialLink;
