import { ClipLoader } from "react-spinners";

export function Button({ text, onclick, disable, icon, loading }) {
  return (
    <button
      onClick={onclick}
      disabled={loading || disable}
      className="flex w-full bg-white border-2 border-black rounded-md py-2 justify-center"
    >
      <span className="flex text-black mx-auto capitalize max-sm:text-[0.875rem] text-[1.2rem] font-medium flex gap-1">
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
