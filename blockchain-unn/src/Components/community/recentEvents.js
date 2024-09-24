import { Link } from "react-router-dom";
import { recentEventsData } from "../../utils/communityData";
import { useContext, useState } from "react";
import previousIcon from "../../assets/icons/previous-icon.svg";
import nextIcon from "../../assets/icons/next-icon.svg";
import { ThemeContext } from "../Theme";

export default function RecentEvents() {
  const [currentMid, setCurrentMid] = useState(1); // The index of the image currently in the middle
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col mx-auto">
        <h1 className="font-raleway-semibold text-[2.5rem] mx-auto">
          Recent Community Events
        </h1>
        <span className="text-[1.5rem] text-center max-w-[50rem]">
          We are motivated by the community and we drive the future of learning
          with these values.
        </span>
      </div>

      <div className="flex px-20 gap-2 w-full justify-center">
        <button
          onClick={() => {
            if (currentMid > 1) {
              setCurrentMid(currentMid - 1);
            }
          }}
          className="-mx-8 my-auto pb-14 z-10"
        >
          <img src={previousIcon} className="w-12 h-12" alt="previous icon" />
        </button>

        <div className="flex gap-6">
          {recentEventsData.map((event, index) => {
            if (index < currentMid - 1 || index > currentMid + 1) return <></>;
            return (
              <div
                className={
                  (theme
                    ? "bg-gradient-to-b from-[#02270C] to-[#011607] "
                    : "bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 ") +
                  " flex w-[18.925rem] py-0.5 justify-center py-0.5 rounded-lg"
                }
              >
                <div
                  className={
                    (theme ? " bg-[#0e5220] " : " bg-slate-100 ") +
                    " flex flex-col justify-center w-[18.8rem] py-[0.35rem] rounded-lg"
                  }
                >
                  <div
                    className={
                      (theme
                        ? "bg-gradient-to-b from-[#02270C] to-[#011607] "
                        : "bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 ") +
                      " flex justify-center mx-auto w-[18.125rem] py-0.5 rounded-t-lg"
                    }
                  >
                    <div
                      style={{ backgroundImage: `url(${event.flyer})` }}
                      className="flex w-[18rem] h-[17rem] bg-cover bg-no-repeat rounded-t-lg bg-black"
                    ></div>
                  </div>

                  <span className="flex w-full justify-center py-3">
                    <Link to={event.imageLinks}>View Images</Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            if (currentMid < recentEventsData.length - 2) {
              setCurrentMid(currentMid + 1);
            }
          }}
          className="-mx-8 my-auto pb-14"
        >
          <img src={nextIcon} className="w-12 h-12" alt="next icon" />
        </button>
      </div>
    </div>
  );
}
