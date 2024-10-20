import React, { useEffect, useState } from "react";
import bg_image from "../../assets/blogathon_bg.png";
import { useLocation, useNavigate } from "react-router-dom";
import previouSvg from "../../assets/icons/previousArrow.svg";
import { useSelector } from "react-redux";
import { API_ROUTES, customAxios } from "../../api.routes";
import Swal from "sweetalert2";
import { format } from "date-fns";

import Home from "../../Components/hackathon/home";
import Team from "../../Components/hackathon/team";
import Schedule from "../../Components/hackathon/schedule";
import Project from "../../Components/hackathon/project";
import Submit from "../../Components/hackathon/submit";
import Navbar from "../../Components/hackathon/navbar";

const HackathonDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const location = useLocation();
  const { hackerDetails, hackathon_id } = useSelector((state) => state.app);
  const [hacker, setHacker] = useState(null);

  // Get hash from url and set as activeTab
  useEffect(() => {
    setActiveTab(
      location.hash.split("#")?.[1] || location.hash.split("#")?.[0]
    );
  }, [location.hash]);

  // Get hacker details
  useEffect(() => {
    (async () => {
      console.log(hackerDetails);
      if (!hackerDetails) {
        // Fetch hacker details
        try {
          const { data } = await customAxios
            .protected()
            .get(API_ROUTES.hackers.get + hackathon_id);
          setHacker(data?.data?.hackerDetails);
        } catch (error) {
          console.log("error ==> ", error?.message);
          navigate("/event/hackathon/login");
        }
      } else {
        setHacker(hackerDetails);
      }
    })();
  }, [hackathon_id, hackerDetails, navigate]);

  const renderComponent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "team":
        return <Team />;
      case "schedule":
        return <Schedule />;
      case "project":
        return <Project />;
      case "submit":
        return <Submit />;
      default:
        return <Home />;
    }
  };

  // Time debug
  console.log("Time debug ==>>", hacker?.registeredOn);

  return (
    <section
      style={{ backgroundImage: `url(${bg_image})` }}
      className="flex flex-col w-screen min-h-screen bg-cover bg-no-repeat bg-scroll"
    >
      <div className="flex flex-col w-full h-screen bg-black/75 py-12 px-4 sm:px-10 lg:px-20 overflow-y-auto">
        <div className="flex w-full justify-start fixed top-0 left-0 max-sm-420:py-6 max-md:py-8 py-12 max-sm-420:px-4 max-lg:px-10 px-20">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={previouSvg} alt="Go Back" className="h-6 max-sm:h-4" />
          </button>
        </div>
        <div className="my-8">
          <h1 className="text-white font-raleway-black text-center text-2xl sm:text-3xl lg:text-4xl">
            Ready to hack{" "}
            <span className="text-blockathon-green">{hacker?.firstName}?</span>
          </h1>
          <p className="text-white font-raleway-medium font-[400] text-center text-[28px]">
            Registered{" "}
            {hacker?.registeredOn
              ? format(hacker?.registeredOn, "EEEE do MMMM, yyyy")
              : ""}
          </p>
        </div>

        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">{renderComponent()}</div>
      </div>
    </section>
  );
};

export default HackathonDashboard;
