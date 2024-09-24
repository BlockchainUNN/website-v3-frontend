import { useContext, useMemo, useState } from "react";
import rawTeamData, { teamTags as tags } from "../../utils/teamData";
import TeamCard from "./teamCards";
import { ThemeContext } from "../Theme";

export default function TheTeam() {
  const [currentTag, setCurrentTag] = useState("");
  const [teamData, teamTags] = useMemo(() => [rawTeamData, tags], []);
  const { theme } = useContext(ThemeContext);

  const TagBtn = ({ tag, onclick }) => (
    <button
      className={
        (currentTag === tag
          ? `${
              theme ? "bg-ash text-black " : "bg-black text-white "
            } px-6 rounded-2xl `
          : "") + " text-[1.2rem] font-raleway-semibold capitalize"
      }
      onClick={onclick}
    >
      <span>{tag || "all"}</span>
    </button>
  );

  return (
    <div className="flex flex-col w-full gap-8 justify-center font-raleway">
      <div className="flex flex-col gap-4 text-center ">
        <h1 className="mx-auto font-inter-extrabold text-[2rem]">
          Meet the Team
        </h1>
        <span className="flex text-[1.5rem] w-[60rem] font-raleway-medium mx-auto text-balanced">
          We’re a student-run organization that promotes innovation in the
          blockchain industry through education, consulting, design, and
          research. We aren’t purely professional, we’re a team of friends,
          collaborators, and students of likeminded peers who ideate, and
          adventure together.
        </span>
      </div>

      <div className="flex w-full flex-col justify-center mx-auto gap-16">
        <div className="flex gap-6 mx-auto">
          <TagBtn onclick={() => setCurrentTag("")} tag={""} />
          {teamTags.map((tag) => (
            <TagBtn key={tag} onclick={() => setCurrentTag(tag)} tag={tag} />
          ))}
        </div>

        <div className="flex justify-center w-full mx-auto">
          <div className="grid grid-cols-3 gap-20 mx-auto w-fit">
            {teamData
              .filter((member) => member.tag.includes(currentTag))
              .map((member) => (
                <TeamCard
                  key={member.name + Math.random()}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  socials={member.socials}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
