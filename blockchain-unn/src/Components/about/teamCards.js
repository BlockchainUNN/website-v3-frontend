import SocialLink from "../socialLink";

export default function TeamCard({ image, name, role, socials }) {
  return (
    <div className="flex flex-col w-[17.25rem] justify-center bg-gradient-to-b from-[#898B8A] via-[#6FAE80] via=[#61F889] to-[#AFC8B5] rounded-3xl py-0.5 ">
      <div className="flex flex-col w-[17rem] rounded-3xl mx-auto  gap-0.5 ">
        <div
          className="h-[20rem] w-[17rem] bg-cover rounded-t-3xl bg-black bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="flex flex-col p-4 bg-slate-100 h-fit rounded-b-3xl">
          <div className="flex flex-col gap-2 text-[0.875rem] ">
            <span className="font-extrabold">{name}</span>
            <span>{role}</span>
          </div>
          <div className="flex w-full flex-row-reverse">
            <div className="flex gap-2">
              <SocialLink to={socials.linkedIn} type={"linkedin"} />
              <SocialLink to={socials.twitter} type={"x"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
