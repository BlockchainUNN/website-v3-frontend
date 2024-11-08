import React from "react";
import BlockathonHero from "../../Components/Blockathon/BlockathonHero";
import Speakers from "../../Components/Blockathon/Speakers";
import EventSchedule from "../../Components/Blockathon/EventSchedule";
import Footer from "../../Components/Blockathon/Footer";
import SponsorsPage from "../../Components/Blockathon/Sponsors";

const Blockathon = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BlockathonHero />
      <Speakers />
      <EventSchedule />
      <SponsorsPage />
      <Footer />
    </div>
  );
};

export default Blockathon;
