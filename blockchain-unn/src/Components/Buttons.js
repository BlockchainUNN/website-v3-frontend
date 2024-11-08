import { ClipLoader } from "react-spinners";

export function Button({ text, onclick, disable, icon, loading, inverse }) {
  return (
    <button
      onClick={onclick}
      disabled={loading || disable}
      className={
        (inverse
          ? "border-white bg-gradient-to-b from-black to-[#1B1A1A] text-white max-sm:py-3 py-4 "
          : "border-black bg-white text-black py-2 ") +
        " flex w-full border-2 rounded-md justify-center"
      }
    >
      <span className="flex mx-auto capitalize max-sm:text-[0.875rem] text-[1.2rem] font-medium flex gap-1">
        {loading ? (
          <ClipLoader size={20} />
        ) : (
          <>
            <span className="flex my-auto">{text}</span>
            {icon && <span className="flex my-auto">{icon}</span>}
          </>
        )}
      </span>
    </button>
  );
}
