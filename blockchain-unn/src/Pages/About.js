import { useContext } from "react";
import AboutUs from "../Components/about/aboutUs";
import TheTeam from "../Components/about/theTeam";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ThemeContext } from "../Components/Theme";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme
          ? `App bg-gradient-to-b from-black1 to-black text-ash`
          : `App bg-gradient-to-b from-grey to-white`) + ""
      }
    >
      <div className="flex w-full px-4 py-14 max-sm:py-8 justify-center">
        <Navbar />
      </div>
      <div className="flex w-full flex-col py-12 max-sm:gap-16 max-lg:gap-28 gap-44">
        <AboutUs />
        <TheTeam />
      </div>
      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
}
