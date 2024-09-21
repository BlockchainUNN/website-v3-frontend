export function Button({ text, onclick, disable, icon }) {
  return (
    <button
      onClick={onclick}
      disabled={disable}
      className="flex w-full bg-white border-2 border-black rounded-md py-2 justify-center"
    >
      <span className="flex text-black mx-auto capitalize text-[1.2rem] font-medium flex gap-1">
        <span className="flex my-auto">{text}</span>
        {icon && <span className="flex my-auto">{icon}</span>}
      </span>
    </button>
  );
}
