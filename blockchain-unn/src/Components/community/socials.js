import { communitySocials } from "../../utils/communityData";
import SocialsCard from "./socialsCard";

export default function Socials() {
  return (
    <div className="flex flex-col gap-10 justify-center max-lg:px-20 max-md:px-10 max-sm:px-6 px-36">
      <h1 className="font-raleway-semibold text-[2.5rem] max-lg:[2rem] max-md:text-[1.75rem] max-md:text-[1.5rem] max-sm-420:text-[1.2rem] text-wrap text-center mx-auto">
        Stay Connected Across Our Socials
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 max-md:gap-4 max-sm-420:gap-2 gap-8">
        {communitySocials.map((item) => (
          <SocialsCard
            icon={
              <img
                className="max-sm:w-4 w-6 max-sm:h-4 h-6 my-auto"
                src={item.icon}
                alt={item.name}
              />
            }
            social={item.name}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
