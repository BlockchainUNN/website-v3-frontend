import React, {useState, useContext } from "react";
import LogoWhite from "../../assets/blockathonlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../Theme";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${
        theme ? "bg-dark-mode-2 shadow text-[#B2B2B2]" : "bg-dark-mode"
      } w-[95%] rounded-3xl px-4 mt-[2rem] border border-gray md:px-10 py-4 flex justify-between items-center shadow-2xl relative`}
    >
      {/* Mobile Logo */}
      <div className="mt-2 h-8 w-36 md:hidden">
          <img
            src={LogoWhite}
            alt="Blockchainunn"
            className="w-full h-full object-cover"
          />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex max-lg:gap-8 gap-16 items-center justify-between w-full">
        <div className="h-12 w-auto">
            <img
              src={LogoWhite}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
        </div>

      </div>
      <div className="flex gap-4 items-center md:hidden ">
        <div className="" onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer text-white" />}
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
