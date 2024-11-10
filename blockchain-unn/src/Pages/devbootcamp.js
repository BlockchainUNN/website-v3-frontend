import React from "react";
import BootcampHero from "../Components/devBootcamp/bootcampHero";
import BootcampAbout from "../Components/devBootcamp/about";
import Schedule from "../Components/devBootcamp/schedule";
import Footer from "../Components/devBootcamp/footer";
import DetailCardContainer from "../Components/devBootcamp/detail-card";
import Navbar from "../Components/Navbar";

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
