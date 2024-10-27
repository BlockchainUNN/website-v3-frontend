import { ClipLoader } from "react-spinners";

export const HackerButton = ({ text, onclick, loading, type }) => {
  return (
    <button
      onClick={onclick}
      disabled={loading}
      type={type ? type : "button"}
      style={{ boxShadow: "4px 4px 4px #000" }}
      className="bg-black flex justify-center w-1/3 mx-auto py-3 border border-white rounded-md drop-shadow-2xl shadow-black max-sm-420:px-4"
    >
      {loading ? (
        <ClipLoader color="white" className="" />
      ) : (
        <span className="my-auto text-white text-[1.2rem] max-sm-420:text-[1rem] text-nowrap">
          {text}
        </span>
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
        "  flex justify-center max-sm-420:w-2/5 w-1/3 py-3 border-2 font-medium rounded-md drop-shadow-2xl "
      }
    >
      <span className="my-auto text-[1.2rem] text-nowrap max-sm-420:text-[1rem]">
        {text}
      </span>
    </button>
  );
};
