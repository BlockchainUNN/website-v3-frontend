import { Link } from "react-router-dom";
import { recentEventsData } from "../../utils/communityData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

export default function RecentEvents() {
  const [currentMid, setCurrentMid] = useState(1); // The index of the image currently in the middle

  return (
    <div>
      <div>
        <h1>Recent Community Events</h1>
        <span>
          We are motivated by the community and we drive the future of learning
          with these values.
        </span>
      </div>

      <div className="flex px-20 gap-2 w-full justify-center">
        <button>
          <span>
            <FaArrowLeftLong />
          </span>
        </button>

        <div className="flex gap-6">
          {recentEventsData.map((event, index) => {
            if (index < currentMid - 1 || index > currentMid + 1) return <></>;
            return (
              <div className="flex w-[18.925rem] py-0.5 justify-center py-0.5 rounded-lg bg-red-500">
                <div className="flex flex-col justify-center w-[18.8rem] py-[0.35rem] rounded-lg bg-slate-100">
                  <div className="flex justify-center mx-auto w-[18.125rem] py-0.5 bg-red-500 rounded-t-lg">
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

        <button>
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}
