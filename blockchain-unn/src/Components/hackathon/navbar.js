import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { FaCalendarCheck, FaRegEdit } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const Navbar = ({ activeTab, setActiveTab }) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  const tabs = useMemo(
    () => [
      { id: "home", label: "Home", icon: HiOutlineHome },
      { id: "team", label: "Team", icon: PiUsersThree },
      { id: "schedule", label: "Schedule", icon: GoProjectSymlink },
      { id: "project", label: "Project", icon: FaCalendarCheck },
      { id: "submit", label: "Submit", icon: FaRegEdit },
    ],
    []
  );

  const currentTab = useMemo(() => {
    for (let index = 0; index < tabs.length; index++) {
      let tab = tabs[index];
      if ("#" + tab.id === location.hash) return tab;
    }

    return tabs[0];
  }, [location.hash, tabs]);

  return (
    <>
      {/* Large Screen Menu */}
      <nav className="flex justify-center space-x-4 max-sm:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-3 py-2 rounded-md text-[25px] font-raleway-medium font-[400] flex items-center gap-2 ${
              activeTab === tab.id
                ? "text-blockathon-green "
                : "text-white hover:text-blockathon-green"
            }`}
            onClick={() => {
              window.location.hash = tab.id;
              setActiveTab(tab.id);
            }}
          >
            <span>{tab.icon({ size: "2rem" })}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Smaller screen Menus */}
      <nav className="hidden max-sm:flex relative">
        {/* Current Tab */}
        <div
          onClick={() => setOpenDropdown(!openDropdown)}
          className="flex gap-2 bg-grey-3/30 px-2 py-1 rounded-lg cursor-pointer"
        >
          <button
            className={`px-3 py-2 rounded-md text-[1.2rem] font-raleway-medium font-[400] flex items-center gap-2 text-white`}
          >
            <span>{currentTab?.icon({ size: "1.5rem" })}</span>
            {currentTab?.label}
          </button>
          <IoIosArrowDown size={"1.5rem"} color="white" className="my-auto" />
        </div>

        {/* Dropdown Menu */}
        <div
          className={
            (openDropdown ? "flex " : "hidden ") +
            " absolute flex-col top-[4rem] bg-white shadow-xl shadow-black gap-2 p-2 rounded-lg w-[15rem] z-50"
          }
        >
          {tabs.map((tab) => {
            if (tab.id === currentTab?.id) return <></>;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  window.location.hash = tab.id;
                  setActiveTab(tab.id);
                  setOpenDropdown(false);
                }}
                className={`px-3 py-2 rounded-md text-[1.2rem] text-black font-raleway-medium font-[400] flex items-center gap-2 hover:bg-grey-3/30 rounded-lg`}
              >
                <span>
                  {tab.icon({
                    size: "1.5rem",
                  })}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
