import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomSelect = ({ options, placeholder, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative flex gap-2 border border-black rounded-md text-grey-2 mx-10 px-5 py-3"
    >
      <div className="my-auto">
        <IoIosArrowDown size={"1.5rem"} />
      </div>
      <span className="font-raleway text-[1.3rem] flex w-full ">
        {placeholder}
      </span>

      <div
        className={
          (open ? "grid" : "hidden") +
          " absolute grid-cols-2 w-full border border-blackm bg-white rounded-md top-[4rem] py-4 px-5 gap-4 left-0"
        }
      >
        {options.map((option) => {
          return (
            <span
              className="text-[1.2rem] hover:text-black hover:font-semibold text-nowrap"
              key={option}
            >
              {option}
            </span>
          );
        })}
      </div>
    </div>
  );
};
