import React, { useEffect, useMemo, useState } from "react";
import bg_image from "../../assets/blogathon_bg.png";
import home from "../../assets/icons/home.svg";
import team from "../../assets/icons/team.svg";
import schedule from "../../assets/icons/schedule.svg";
import project from "../../assets/icons/project.svg";
import projectblack from "../../assets/icons/project-black.svg";
import profile from "../../assets/icons/edit.svg";
import exit from "../../assets/icons/exit.svg";
import { useLocation, useNavigate } from "react-router-dom";
import previouSvg from "../../assets/icons/previousArrow.svg";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/localStorage";
import { API_ROUTES, customAxios } from "../../api.routes";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { MoonLoader } from "react-spinners";
import { Button } from "../../Components/Buttons";

export const Home = () => {
  const rules = [
    "BlockchainUNN Conference 3.0 is happening in person.",
    "Hackers teams are made up of a maximum of 5 people.",
    " All projects must be related to blockchain.",
    " minimum of 3 members of your team will need to be at the venue to be judge. ",
    "No online submissions. ",
  ];

  return (
    <div className="w-[80%] h-[520px] mx-auto bg-white rounded-[26px] flex flex-col items-center py-[12px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center h-[70px] mb-3">
        <h2 className="text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            BLOCKATHON RULES
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            BLOCKATHON RULES
          </span>
        </h2>
      </div>

      {rules.map((rule, index) => (
        <div
          key={index}
          className="h-[61.56px] w-fit rounded-[11px] shadow-xl bg-white text-black font-raleway-semibold font-[700] text-[16px] flex items-center justify-center py-2 px-4"
        >
          {`0${index + 1}    ${rule}`}
        </div>
      ))}
    </div>
  );
};

export const Team = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [hasTeam, setHasTeam] = useState(true);

  const [teamActions, setteamActions] = useState("create"); // create||join
  const [inputData, setInputData] = useState("");
  const [leaveTeam, setLeaveTeam] = useState(false);

  const [loadingTeam, setLoadingTeam] = useState(false);
  const { hackathon_id } = useSelector((state) => state.app);
  const navigate = useNavigate();

  // Leave team
  useEffect(() => {
    (async () => {
      if (leaveTeam) {
        try {
          await customAxios
            .protected()
            .delete(API_ROUTES.teams.leave + hackathon_id);
          navigate(0);
        } catch (error) {
          console.log("Leave team Error =>", error);
          Swal.fire({
            icon: "error",
            title:
              error?.response?.data?.error ||
              error?.message ||
              "Something went wrong.",
            confirmButtonText: "Okay",
          });
        }
      }
    })();
  }, [hackathon_id, leaveTeam, navigate]);

  // Try to get team data, then display Team Details and leave team btn if successful. Else show create and leave team UI.
  useEffect(() => {
    (async () => {
      if (!teamData && hasTeam) {
        setLoadingTeam(true);
        try {
          const { data } = await customAxios
            .protected()
            .get(API_ROUTES.teams.get + hackathon_id);

          console.log(data);
          setTeamData(data?.data);
          setLoadingTeam(false);
        } catch (error) {
          console.log("Team Error => ", error);
          if (error?.response?.data?.error !== "Hacker has no team")
            Swal.fire({
              icon: "error",
              title:
                error?.response?.data?.error ||
                error?.message ||
                "Something went wrong.",
              confirmButtonText: "Okay",
            });
          setHasTeam(false);
          setLoadingTeam(false);
        }
      }
    })();
  }, [hackathon_id, hasTeam, teamData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (teamActions === "create") {
        await customAxios
          .protected()
          .post(API_ROUTES.teams.create + hackathon_id, { name: inputData });
        navigate(0);
        return;
      }

      // Else if Join
      await customAxios
        .protected()
        .post(API_ROUTES.teams.join + hackathon_id, { inviteCode: inputData });
      navigate(0);
      return;
    } catch (error) {
      console.log("Create/Join team error ==>", error);
      Swal.fire({
        icon: "error",
        title:
          error?.response?.data?.error ||
          error?.message ||
          "Something went wrong.",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="w-[80%] h-[520px] mx-auto bg-white rounded-[26px] flex flex-col items-center py-[12px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center h-[70px] mb-3">
        <h2 className="text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            TEAM OVERVIEW
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            TEAM OVERVIEW
          </span>
        </h2>
      </div>

      {loadingTeam ? (
        <div className="flex w-full justify-center my-auto">
          <MoonLoader size={50} color="green" className="mx-auto" />
        </div>
      ) : teamData ? (
        <>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4 w-full">
              <h2>Team Members</h2>
              <h3>Role</h3>
            </div>
            <div>
              {teamData?.hackers.map((hacker) => {
                return (
                  <div className="flex gap-4 w-full">
                    <div>
                      {hacker?.user?.first_name} {hacker?.user?.last_name}
                    </div>
                    <div>{hacker?.role}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full justify-center">
              <span className="flex mx-auto">
                Team Invite Code: {teamData?.invite_code}
              </span>
            </div>
            <div className="flex w-full flex-row-reverse">
              <Button
                onclick={() => {
                  Swal.fire({
                    icon: "question",
                    text: "You sure you want to leave this team?",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    showCancelButton: true,
                  }).then((result) => {
                    if (result.isConfirmed) setLeaveTeam(true);
                  });
                }}
                text={"Leave"}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-4 w-full mb-[50px]">
            <button
              type="button"
              onClick={() => setteamActions("create")}
              className="w-[23%] h-[73px] bg-white shadow-xl border border-black text-black font-raleway-medium text-[20px] rounded-[5px] "
            >
              Create Team
            </button>
            <button
              type="button"
              onClick={() => setteamActions("join")}
              className="w-[23%] h-[73px] bg-black shadow-xl text-white font-raleway-medium text-[20px] rounded-[5px] "
            >
              Join Team
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full items-center "
          >
            <div className="relative">
              <input
                type="text"
                onChange={(event) => {
                  setInputData(event.target.value);
                }}
                className="w-full md:w-[644px] h-[73px] border-[1px] border-black rounded-[5] px-6  focus:outline-none"
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setIsFocused(false);
                  }
                }}
              />
              {!isFocused && (
                <div className="absolute inset-y-0 left-0 flex gap-1 items-center pl-4 pointer-events-none">
                  <img
                    src={projectblack}
                    alt="Project"
                    className="w-[35px] h-[35px]"
                  />
                  <span className="text-[#898B8A] font-raleway-medium text-[20px]">
                    {teamActions === "create" ? "Team Name" : "Invite Code"}
                  </span>
                </div>
              )}
            </div>
            <button className="w-[33%] h-[73px] bg-black shadow-xl text-white font-raleway-medium text-[20px] rounded-[5px] mx-auto">
              {teamActions === "create" ? "Create" : "Join"} Team
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export const Schedule = () => (
  <div className="w-[80%] h-fit mx-auto flex flex-col items-center py-[12px] px-[18px] gap-4">
    <div className="w-full flex flex-col items-center h-[70px] mb-6">
      <h2 className="text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
        <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
          EVENT SCHEDULE
        </span>
        <span className="absolute left-[1px] -top-[1px] text-stroke w-full self-center">
          EVENT SCHEDULE
        </span>
      </h2>
    </div>
    <div className="w-full flex flex-col gap-12 items-center justify-center mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 px-auto">
        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 1
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Mon 21st October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Online Hackathon officially starts with workshops from sponsors.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 2
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Tue 22nd October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Online Hackathon day (2) two continues with the hackers and their
              teams.
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full sm:w-1/2 h-[150px] bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 3
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Wed 23rd October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Admissions to all registered participants into the hacker house
              for the physical phase.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 4
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Thur 24th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Physical Hackathon day (2) two continues with hackers rounding up.
            </h2>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full sm:w-1/2 h-[150px] bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 5
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Fri 25th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Judges will review and judge, and the top 10 projects get to do a
              physical presentation.
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 h-[150px]  bg-blockchain-white flex flex-col items-center px-8 py-4">
          <p className="border-2 border-black px-4 font-bold bg-blockathon-green text-black w-[85px] absolute -top-4">
            DAY 6
          </p>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <p className="text-black font-light text-[10px]">
              Sat 26th October, 2024
            </p>
            <h2 className="text-black font-semibold text-[18px]">
              Conference 3.0 grand finale event for all techies. (Newbies,
              Designers Developers Content writers, e.t.c.)
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Project = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-[80%] h-fit mx-auto bg-white rounded-[26px] flex flex-col items-center py-[60px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center h-[70px] mb-3">
        <h2 className="text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            PROJECT OVERVIEW
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            PROJECT OVERVIEW
          </span>
        </h2>
      </div>

      <div className="w-[60%]">
        <form className="w-full flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              className="w-full md:w-[644px] h-[73px] border-[1px] border-black rounded-[5] px-6  focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setIsFocused(false);
                }
              }}
            />
            {!isFocused && (
              <div className="absolute inset-y-0 left-0 flex gap-1 items-center pl-4 pointer-events-none">
                <img
                  src={projectblack}
                  alt="Project"
                  className="w-[35px] h-[35px]"
                />
                <span className="text-[#898B8A] font-raleway-medium text-[20px]">
                  Project
                </span>
              </div>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full md:w-[644px] h-[73px] border-[1px] border-black rounded-[5] px-6  focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setIsFocused(false);
                }
              }}
            />
            {!isFocused && (
              <div className="absolute inset-y-0 left-0 flex gap-1 items-center pl-4 pointer-events-none">
                <img
                  src={projectblack}
                  alt="Project"
                  className="w-[35px] h-[35px]"
                />
                <span className="text-[#898B8A] font-raleway-medium text-[20px]">
                  Description of your project
                </span>
              </div>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full md:w-[644px] h-[73px] border-[1px] border-black rounded-[5] px-6  focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setIsFocused(false);
                }
              }}
            />
            {!isFocused && (
              <div className="absolute inset-y-0 left-0 flex gap-1 items-center pl-4 pointer-events-none">
                <img
                  src={projectblack}
                  alt="Project"
                  className="w-[35px] h-[35px]"
                />
                <span className="text-[#898B8A] font-raleway-medium text-[20px]">
                  Live Link
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="w-[33%] h-[73px] bg-black shadow-xl text-white font-raleway-medium text-[20px] rounded-[5px] mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const Profile = () => (
  <div className="text-white">
    <h2 className="text-2xl font-bold mb-4">Hackathon Resources</h2>
    <p>
      Find all the resources you need for Blockathon 2024 here, including
      documentation, APIs, and more.
    </p>
    {/* Add links to resources or embed them here */}
  </div>
);

export const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "home", label: "Home", icon: home },
    { id: "team", label: "Team", icon: team },
    { id: "schedule", label: "Schedule", icon: schedule },
    { id: "project", label: "Project", icon: project },
    { id: "profile", label: "Edit Profile", icon: profile },
    { id: "exit", label: "Leave Team", icon: exit },
  ];

  return (
    <nav className="flex justify-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-3 py-2 rounded-md text-[25px] font-raleway-medium font-[400] flex items-center gap-2 ${
            activeTab === tab.id
              ? "text-blockathon-green "
              : "text-white hover:text-blockathon-green"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <img src={tab.icon} alt={tab.label} className={`w-[32px] h-[32px]`} />
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

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
          if (
            error.status === 401 ||
            error?.message === "Please Log In to continue"
          ) {
            Swal.fire({
              icon: "error",
              text: "Session Expired. Please Log In.",
              confirmButtonText: "Login",
            }).then((result) => {
              if (result.isConfirmed) navigate("/blockathon/hackathon/login");
            });
          } else {
            Swal.fire({
              icon: "error",
              text: "Something Went Wrong!!!",
              confirmButtonText: "Close",
            }).finally(() => navigate("/blockathon"));
          }
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
      case "profile":
        return <Profile />;
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
            Ready to Hack{" "}
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
