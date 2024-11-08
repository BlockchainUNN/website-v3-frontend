import React from "react";
import Navbar from "../Components/devBootcamp/navbar";
import BootcampHero from "../Components/devBootcamp/bootcampHero";
import BootcampAbout from "../Components/devBootcamp/about";
import Schedule from "../Components/devBootcamp/schedule";
import Footer from "../Components/devBootcamp/footer";
import DetailCardContainer from "../Components/devBootcamp/detail-card";

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