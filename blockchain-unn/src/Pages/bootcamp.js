import React from "react";
import Navbar from "../Components/Bootcamp/navbar";
import BootcampHero from "../Components/Bootcamp/bootcampHero";
import BootcampAbout from "../Components/Bootcamp/about";
import Schedule from "../Components/Bootcamp/schedule";
import Footer from "../Components/Bootcamp/footer";
import DetailCardContainer from "../Components/Bootcamp/detail-card";

const Bootcamp = () => {
    return (
        <div className="bg-footer-dark min-h-screen min-w-screen w-full px-2 md:px-[4rem] py-[2rem]">
            <Navbar />
            <BootcampHero />
            <BootcampAbout />
            <Schedule />
            <DetailCardContainer />
            <Footer />
        </div>
    );
}

export default Bootcamp