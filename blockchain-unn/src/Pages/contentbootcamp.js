import React from "react";
import Navbar from "../Components/Navbar";
import BootcampHero from "../Components/contentBootcamp/bootcampHero";
import BootcampAbout from "../Components/contentBootcamp/about";
import Schedule from "../Components/contentBootcamp/schedule";
import Footer from "../Components/devBootcamp/footer";
import DetailCardContainer from "../Components/contentBootcamp/detail-card";

const Bootcamp = () => {
  return (
    <div className="bg-footer-dark min-h-screen min-w-screen w-full px-2 md:px-[4rem] py-[2rem]">
      <div className="flex w-full mx-auto">
        <Navbar />
      </div>
      <BootcampHero />
      <BootcampAbout />
      <Schedule />
      <DetailCardContainer />
      <Footer />
    </div>
  );
};

export default Bootcamp;
