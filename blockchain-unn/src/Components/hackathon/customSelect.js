import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomSelect = ({ options, placeholder, onChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative flex gap-2 border border-black rounded-md text-grey-2 max-sm-420:mx-4 mx-10 max-sm-420:px-3 px-5 max-sm-420:py-2 py-3"
    >
      <div className="my-auto">
        <IoIosArrowDown size={"1.5rem"} />
      </div>
      <span className="font-raleway max-sm-420:text-[1rem] text-[1.3rem] flex w-full ">
        {open ? placeholder : value ? value : placeholder}
      </span>

      <div
        className={
          (open ? "grid" : "hidden") +
          " absolute grid-cols-2 w-full border border-black bg-white shadow-xl shadow-black rounded-md max-sm-420:top-[3rem] top-[4rem] py-4 max-sm-420:px-3 max-sm-420:py-2 px-5 gap-4 left-0"
        }
      >
        {options.map((option) => {
          return (
            <span
              onClick={() => {
                setValue(option);
                onChange(option);
              }}
              className="max-sm-420:text-[0.875rem] text-[1.2rem] hover:text-black hover:font-semibold text-nowrap max-sm-420:text-wrap"
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
