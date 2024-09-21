import { useState } from "react";

export function Input({ name, text, placeholder, onChange, required, icon }) {
  return (
    <div className="flex gap-2 p-4 w-full border border-white rounded text-[1.2rem] text-white">
      <div className="flex h-full">
        <img className="w-5 h-5 my-auto" src={icon} alt={name} />
      </div>
      <input
        className="flex w-full bg-transparent border-none outline-none"
        name={name}
        text={text}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export function SelectInput({
  name,
  placeholder,
  onChange,
  value,
  required,
  icon,
  iconComponent,
  options,
}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="flex gap-2 p-4 w-full h-fit border border-white rounded text-[1.2rem] text-white z-10"
      >
        <div className="flex h-full">
          {iconComponent ? (
            iconComponent
          ) : (
            <img className="w-5 h-5 my-auto" src={icon} alt={name} />
          )}
        </div>
        <select
          className="flex w-full bg-transparent border-none outline-none"
          name={name}
          onChange={onChange}
          required={required}
          value={value}
          disabled={showOptions}
        >
          <option className="hidden" value={""} disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option className="hidden" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Options */}
      <div
        className={
          (showOptions ? "h-full flex " : "h-0 hidden ") +
          " flex-col gap-2 py-4 px-12 capitalize transition-[height] duration-500 delay-75 border border-white rounded text-[1.2rem] text-white w-full"
        }
      >
        {options.map((option, index) => (
          <button
            type={"button"}
            className={(showOptions ? "flex " : "hidden ") + "w-full "}
            key={option}
            onMouseEnter={(event) =>
              event.currentTarget.classList.add("text-blockathon-green")
            }
            onMouseLeave={(event) =>
              event.currentTarget.classList.remove("text-blockathon-green")
            }
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
