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
          : `App bg-gradient-to-b from-grey to-white`) + " gap-60"
      }
    >
      <div className="flex flex-col w-full justify-center gap-8">
        <div className="flex w-full py-14 justify-center">
          <Navbar />
        </div>
        <div className="flex w-full flex-col gap-32">
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
