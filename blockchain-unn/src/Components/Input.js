import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Input({
  name,
  text,
  placeholder,
  onChange,
  required,
  icon,
  value,
  disabled,
  error,
}) {
  return (
    <div
      className={
        (error ? " border-red-500 " : "border-white ") +
        "flex gap-2 max-sm:p-2 p-4 w-full h-fit border rounded-md max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[0.875rem] text-[1.2rem] text-white"
      }
    >
      <div className="flex my-auto">
        <img
          className="max-sm-420:w-4 max-sm-420:h-4 w-5 h-5 my-auto"
          src={icon}
          alt={name}
        />
      </div>
      <input
        className={" flex w-full bg-transparent border-none outline-none"}
        name={name}
        text={text}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export function SelectInput({
  name,
  placeholder,
  onChange,
  value,
  icon,
  iconComponent,
  options,
  extraClasses,
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={"flex flex-col gap-0.5 w-full " + extraClasses}>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="flex gap-2 max-sm:p-2 p-4 w-full h-fit border border-white rounded-md max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[0.875rem] text-[1.2rem] text-white z-10"
      >
        <div className="flex h-full">
          {iconComponent ? (
            iconComponent
          ) : (
            <img
              className="max-sm-420:w-4 max-sm-420:h-4 w-5 h-5 my-auto"
              src={icon}
              alt={name}
            />
          )}
        </div>
        <div className="flex w-full h-full bg-transparent justify-between border-none outline-none cursor-pointer">
          <span className="my-auto text-nowrap">
            {showOptions ? placeholder : value ? value : placeholder}
          </span>
          {showOptions ? (
            <IoIosArrowUp color="white" className="my-auto" />
          ) : (
            <IoIosArrowDown color="white" className="my-auto" />
          )}
        </div>
      </div>

      {/* Options */}
      <div
        className={
          (showOptions ? "h-full flex " : "h-0 hidden ") +
          " flex-col gap-2 py-4 max-sm:px-8 px-12 capitalize transition-[height] duration-500 delay-75 border border-white rounded-md max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[0.875rem] text-[1.2rem] text-white w-full"
        }
      >
        {options.map((option, index) => (
          <button
            type={"button"}
            className={(showOptions ? "flex " : "hidden ") + "w-full "}
            key={option}
            onClick={() => {
              onChange(name, option);
              setShowOptions(false);
            }}
            onMouseEnter={(event) =>
              event.currentTarget.classList.add("text-blockathon-green")
            }
            onMouseLeave={(event) =>
              event.currentTarget.classList.remove("text-blockathon-green")
            }
          >
            <span className="text-nowrap">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
