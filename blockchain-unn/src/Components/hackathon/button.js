import { ClipLoader } from "react-spinners";

export const HackerButton = ({ text, onclick, loading }) => {
  return (
    <button
      onClick={onclick}
      disabled={loading}
      style={{ boxShadow: "4px 4px 4px #000" }}
      className="bg-black flex justify-center w-1/3 mx-auto py-3 border border-white rounded-md drop-shadow-2xl shadow-black"
    >
      {loading ? (
        <ClipLoader color="white" />
      ) : (
        <span className="my-auto text-white text-[1.2rem]">{text}</span>
      )}
    </button>
  );
};

export const TeamButton = ({ text, onclick, selected }) => {
  return (
    <button
      onClick={onclick}
      style={{
        boxShadow: selected ? "4px 4px 4px #D9D9D9" : "4px 4px 4px #000",
      }}
      className={
        (selected
          ? "bg-white border-black text-black shadow-grey-3 "
          : "bg-black border-white text-white shadow-black ") +
        "  flex justify-center w-1/3 py-3 border-2 font-medium rounded-md drop-shadow-2xl "
      }
    >
      <span className="my-auto text-[1.2rem]">{text}</span>
    </button>
  );
};
