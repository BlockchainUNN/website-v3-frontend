import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch.js";
import LogoBlack from "../assets/blockchainunn-green.png";
import LogoWhite from "../assets/blockchainunn-white.png";
import { ThemeContext } from "./Theme.js";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialLink from "./socialLink.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Community", "Blog", "Team", "Events"];
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  // Get the current page from the URL to highlight the corresponding nav item
  const currentPage = location.pathname.split("/")[1] || "home";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to get the correct link for each nav item
  const getNavItemLink = (item) => {
    if (item.toLowerCase() === "team") {
      return "/about#team";
    }
    return `/${item.toLowerCase()}`;
  };

  return (
    <div
      className={`${
        theme ? "bg-dark-mode shadow text-[#B2B2B2]" : "bg-white"
      } w-[95%] rounded-md px-4 md:px-10 py-4 flex justify-between items-center shadow-2xl relative`}
    >
      {/* Mobile Logo */}
      <div className="mt-2 h-8 w-36 md:hidden">
        {theme ? (
          <img
            src={LogoWhite}
            alt="Blockchainunn"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={LogoBlack}
            alt="Blockchainunn"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex gap-4 items-center md:hidden ">
        <ThemeSwitch />
        <div className="" onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer" />}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex max-lg:gap-8 gap-16 items-center justify-between w-full">
        <div className="mt-2 h-8 w-36">
          {theme ? (
            <img
              src={LogoWhite}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={LogoBlack}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <ul className="flex gap-8 max-lg:gap-4">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer"
            >
              <Link to={getNavItemLink(item)} className="block">
                <span>{item}</span>
                {/* Show the green bar if this is the active page */}
                {currentPage === item.toLowerCase() && (
                  <div className="absolute left-1/4 transform -translate-x-1/2 bottom-[-4px] w-1/2 border-b-2 border-green-600 rounded-sm"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <SocialLink to={""} type={"linkedin"} />
          <SocialLink to={""} type={"telegram"} />
          <SocialLink to={""} type={"x"} />
          <SocialLink to={""} type={"instagram"} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute flex flex-col top-2 left-0 w-full h-fit bg-white z-10 shadow-lg p-4 overflow-hidden ">
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;