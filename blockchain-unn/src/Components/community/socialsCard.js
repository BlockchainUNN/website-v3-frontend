export default function SocialsCard({ social, icon, content }) {
  return (
    <div className="flex flex-col w-full p-8 rounded-2xl font-raleway-semibold gap-6 shadow-xl">
      <span className="flex justify-center w-12 h-12 bg-blockchain-green rounded-md">
        {icon}
      </span>
      <span className=" text-[1.5rem] leading-4">{social}</span>
      <span className="text-[1rem] leading-4">{content}</span>
    </div>
  );
}
