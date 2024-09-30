import React from "react";
import BlockathonHero from "../../Components/Blockathon/BlockathonHero";
import Speakers from "../../Components/Blockathon/Speakers";
import EventSchedule from "../../Components/Blockathon/EventSchedule";
import Prizes from "../../Components/Blockathon/Prizes";
import Footer from "../../Components/Blockathon/Footer";

const Blockathon = () => {
    return (
        <div className="w-full flex flex-col items-center">
           <BlockathonHero />
           <Speakers />
           <EventSchedule />
           <Footer />
        </div>
    );
}

export default Blockathon;