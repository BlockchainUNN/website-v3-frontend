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
      className={theme ? `App ` : `App bg-gradient-to-b from-grey to-white `}
    >
      <div className="flex flex-col w-full justify-center">
        <div className="flex w-full px-4 py-14 flex-col">
          <Navbar />
          <Header />
        </div>
        <div className="flex w-full flex-col gap-10">
          <CommunityImages />
          <Socials />
          <RecentEvents />
        </div>
      </div>
      <Footer />
    </div>
  );
}
