import React, {useState, useContext } from "react";
import LogoWhite from "../../assets/blockathonlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../Theme";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navItems = ["Register"];
  const location = useLocation();


  // Determine register link based on current URL path
  const registerLink =
    location.pathname === "/bootcamp/dev"
      ? "/bootcamp/dev/registeration"
      : location.pathname === "/bootcamp/content"
      ? "/bootcamp/content/registeration"
      : null;


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

   // Helper function to get the correct link for each nav item
   const getNavItemLink = (item) => {
    if (item.toLowerCase() === "team") {
      return "/about#team";
    } else if (item.toLowerCase() === "event") {
      return "/event";
    } else if (item.toLowerCase() === "hackathon login") {
      return "/event/hackathon";
    }
    return `/${item.toLowerCase()}`;
  };

  return (
    <div
      className={`${
        theme ? "bg-dark-mode-2 shadow text-[#B2B2B2]" : "bg-dark-mode"
      } w-[95%] rounded-3xl px-4 mt-[2rem] border border-gray md:px-10 py-4 flex justify-between items-center shadow-2xl relative`}
    >
      {/* Mobile Logo */}
      <div className="mt-2 h-8 w-36 md:hidden">
        <Link to="/">
          <img
            src={LogoWhite}
            alt="Blockchainunn"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex max-lg:gap-8 gap-16 items-center justify-between w-full">
        <div className="h-12 w-auto">
        <Link to="/">
            <img
              src={LogoWhite}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

      </div>


      <div className=" flex gap-4 items-center ">
      {registerLink && (
              <p
                className="cursor-pointer font-raleway-semibold text-[18px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={registerLink} className="text-white">
                  REGISTER
                </Link>
              </p>
            )}
        <div className="hidden" onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer text-white" />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute flex flex-col top-2 rounded-xl left-0 w-full h-fit bg-white z-10 shadow-lg p-4 overflow-hidden ">
          <FaTimes
            size={25}
            onClick={toggleMobileMenu}
            className="self-end cursor-pointer"
          />
          <ul className="flex flex-col gap-4 p-2">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={getNavItemLink(item)} className="block">
                  <span>{item}</span>
                </Link>
              </li>
              
            ))}
            {registerLink && (
              <li
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={registerLink} className="block text-green-600">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
