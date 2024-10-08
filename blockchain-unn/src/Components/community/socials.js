import { communitySocials } from "../../utils/communityData";
import SocialsCard from "./socialsCard";

export default function Socials() {
  return (
    <div className="flex flex-col gap-20 justify-center px-44">
      <h1>Stay Connected Across Our Socials</h1>
      <div className="grid grid-cols-3 gap-8">
        {communitySocials.map((item) => (
          <SocialsCard
            icon={
              <img
                className="w-6 h-6 my-auto"
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
