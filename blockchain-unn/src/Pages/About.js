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
      className={theme ? `App ` : `App bg-gradient-to-b from-grey to-white `}
    >
      <div className="flex w-full px-4 py-14 justify-center">
        <Navbar />
      </div>
      <div className="flex w-full flex-col py-12 gap-44">
        <AboutUs />
        <TheTeam />
      </div>
      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
}
