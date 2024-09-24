import { useEffect, useState } from "react";
import { communityPics } from "../../utils/communityData"; // Collection of images from the community preferably as links when we launch.

export default function CommunityImages() {
  const [displayImages, setDisplayImages] = useState(Array(9).fill(null)); // Array of random indexs to communityPics array. With Lenght of 9
  const [grenCast, setGreenCast] = useState({
    yes: "bg-blockchain-green/40 ",
    no: "",
  });

  // Function to interchange the greenCast every few second
  useEffect(() => {
    const interval = setInterval(() => {
      setGreenCast((prev) => {
        return {
          yes: prev.no,
          no: prev.yes,
        };
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // First we need to be able to pick a random number between 0 and the lenght of communityPics.
  const randNumber = (maxNum) => {
    const PRIME = 94693; // prime number to use for multiplications
    const randomInteger = Math.round(PRIME * Math.random());
    return randomInteger % maxNum;
  };

  useEffect(() => {
    // Then we do that 9 times while making sure the same number is not picked twice.
    const collectionArr = [];
    while (collectionArr.length < displayImages.length) {
      let newNumber = randNumber(communityPics.length);
      if (!collectionArr.includes(newNumber)) collectionArr.push(newNumber);
    }

    setDisplayImages(() => collectionArr);
  }, [displayImages.length]);

  // Function to change one image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const swapNumber = randNumber(communityPics.length);
      const swapSpot = randNumber(displayImages.length);
      if (!displayImages.includes(swapNumber))
        setDisplayImages((prev) => {
          prev[swapSpot] = swapNumber;
          return prev;
        });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [displayImages]);

  return (
    <div className="grid grid-cols-3 px-24">
      {displayImages.map((imgIndex, index) => {
        return (
          <div
            style={{ backgroundImage: `url(${communityPics[imgIndex]})` }}
            className="flex w-full min-h-[18rem] bg-cover bg-no-repeat bg-black transition-all ease-linear duration-1000"
          >
            <div
              className={
                (index % 2 === 0 ? grenCast.yes : grenCast.no) +
                " flex w-full transition-all ease-linear duration-1000 h-full"
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
}
