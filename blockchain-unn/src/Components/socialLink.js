import { Link } from "react-router-dom";
import xLogo from "../assets/socials/x-black.svg";
import linkedInLogo from "../assets/socials/linkedIn-black.svg";
import instagramLogo from "../assets/socials/instagram-black.svg";
import telegramLogo from "../assets/socials/telegram-black.svg";

/* <div
  className={`p-2 flex items-center justify-center border border-[#02641c] h-[20px] w-[20px] ${
    not-theme ? "bg-[#cdf0d7]" : "bg-[#031f0a]"
  }`}
>
  <p className="text-[12px] font-semibold">in</p>
</div>; */

const SocialLink = ({ to, type }) => {
  return (
    <Link
      className="flex justify-center border border-blockchain-green bg-blockchain-green/15 w-6 h-6"
      to={to}
    >
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
    </Link>
  );
};

export default SocialLink;
