import React from "react";
import Navbar from "../Components/Bootcamp/navbar";
import BootcampHero from "../Components/Bootcamp/bootcampHero";
import BootcampAbout from "../Components/Bootcamp/about";
import Schedule from "../Components/Bootcamp/schedule";
import Footer from "../Components/Bootcamp/footer";

const Bootcamp = () => {
    return (
        <div className="bg-footer-dark min-h-screen min-w-screen w-full px-[4rem] py-[2rem]">
            <Navbar />
            <BootcampHero />
            <BootcampAbout />
            <Schedule />
            <Footer />
        </div>
    );
}

export default Bootcamp