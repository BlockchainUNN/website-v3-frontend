export default function AboutUsCard({ title, icon, content }) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl py-12 px-8 drop-shadow-xl shadow-xl bg-[#EDEDED]">
      <div className="flex w-full justify-start">
        <span className="flex justify-center w-[4.5rem] h-[4.5rem] bg-blockchain-green rounded-full">
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <span className="font-semibold text-[1.5rem]">{title}</span>
        <span className="w-[17rem] text-pretty text-[1.2rem] leading-6">
          {content}
        </span>
      </div>
    </div>
  );
}
