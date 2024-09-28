import { useContext } from "react";
import CommunityImages from "../Components/community/communityImages";
import Header from "../Components/community/header";
import RecentEvents from "../Components/community/recentEvents";
import Socials from "../Components/community/socials";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ThemeContext } from "../Components/Theme";

export default function Community() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme
          ? `App bg-gradient-to-b from-black1 to-black text-ash`
          : `App bg-gradient-to-b from-grey to-white`) + " max-md:gap-20 gap-60"
      }
    >
      <div className="flex flex-col w-full justify-center max-lg:gap-4 max-sm:gap-0 gap-8">
        <div className="flex w-full py-14 justify-center">
          <Navbar />
        </div>
        <div className="flex w-full flex-col max-lg:gap-20 max-sm:gap-12 gap-32">
          <Header />
          <CommunityImages />
          <Socials />
          <RecentEvents />
        </div>
      </div>
      <Footer />
    </div>
  );
}
