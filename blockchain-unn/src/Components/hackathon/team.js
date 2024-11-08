import React, { useEffect, useState } from "react";
import projectblack from "../../assets/icons/project-black.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_ROUTES, customAxios } from "../../api.routes";
import Swal from "sweetalert2";
import { MoonLoader } from "react-spinners";
import { Button } from "../../Components/Buttons";
import { HackerButton, TeamButton } from "./button";
import { Input } from "./submit";
import { TbCopy, TbCopyCheck } from "react-icons/tb";
import { updateTeamDetails } from "../../redux/slice";

const Team = () => {
  // const [isFocused, setIsFocused] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [hasTeam, setHasTeam] = useState(true);
  const [loading, setLoading] = useState(false);

  const [teamActions, setteamActions] = useState("create"); // create||join
  const [inputData, setInputData] = useState("");
  const [leaveTeam, setLeaveTeam] = useState(false);
  const [codeCopied, setCodecopied] = useState(false);

  const dispatch = useDispatch();
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

  // Try to get team data, then display Team Details and leave team btn if successful. Else show create and join team UI.
  useEffect(() => {
    (async () => {
      if (!teamData && hasTeam) {
        setLoadingTeam(true);
        try {
          const { data } = await customAxios
            .protected()
            .get(API_ROUTES.teams.get + hackathon_id);

          console.log("team => ", data);
          setTeamData(data?.data);
          dispatch(updateTeamDetails(data?.data));
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
  }, [dispatch, hackathon_id, hasTeam, teamData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (teamActions === "create") {
        await customAxios
          .protected()
          .post(API_ROUTES.teams.create + hackathon_id, { name: inputData });
        setLoading(false);

        Swal.fire({
          icon: "success",
          text: "Congratulations. You have successfully created a new team.",
        }).finally(() => navigate(0));
        return;
      }

      // Else if Join
      await customAxios
        .protected()
        .post(API_ROUTES.teams.join + hackathon_id, { inviteCode: inputData });
      setLoading(false);

      Swal.fire({
        icon: "success",
        text: "Congratulations. You have successfully joined a new team.",
      }).finally(() => navigate(0));
      return;
    } catch (error) {
      console.log("Create/Join team error ==>", error);
      setLoading(false);
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
    <div className="max-sm-420:w-full w-[80%] xl:w-[60%] max-sm-420:h-fit max-sm-420:py-4 max-sm-420:px-4 max-sm:min-h-[300px] min-h-[520px] mx-auto bg-white max-sm-420:rounded-2xl rounded-[26px] flex flex-col items-center py-[12px] max-sm-420:px-[6px] px-[18px] gap-4 max-sm-420:gap-2">
      <div className="w-full flex flex-col items-center max-sm:h-[35px] h-[70px] mb-3 max-sm-420:mb-0">
        <h2 className="max-sm-420:text-[1.5rem] max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center uppercase">
            {teamData?.name ? teamData.name : "TEAM OVERVIEW"}
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent uppercase bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            {teamData?.name ? teamData.name : "TEAM OVERVIEW"}
          </span>
        </h2>
      </div>

      {loadingTeam ? (
        <div className="flex w-full justify-center my-auto">
          <MoonLoader size={50} color="green" className="mx-auto" />
        </div>
      ) : teamData ? (
        <>
          <div className="flex flex-col gap-2 w-full px-2">
            <div className="flex max-sm-420:gap-6 gap-10 w-full max-sm-420:text-[0.875rem] text-[1.2rem] font-semibold uppercase">
              <h2 className="max-sm-420:w-[7rem] w-[10rem]">Team Members</h2>
              <h3>Role</h3>
            </div>
            <div>
              {teamData?.hackers.map((hacker) => {
                return (
                  <div className="flex max-sm-420:gap-6 gap-10 w-full max-sm-420:text-[0.75rem]">
                    <div className="max-sm-420:w-[7rem] w-[10rem] truncate">
                      {hacker?.user?.first_name} {hacker?.user?.last_name}
                    </div>
                    <div className="truncate text-nowrap">{hacker?.role}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full justify-center">
              <span className="flex gap-2 mx-auto">
                <b>Team Invite Code:</b> <span>{teamData?.invite_code}</span>{" "}
                <button
                  onClick={async () => {
                    console.log("Trying to copy", teamData?.invite_code);

                    if (teamData?.invite_code) {
                      await navigator.clipboard.writeText(teamData.invite_code);
                      setCodecopied(true);
                      console.log("Copied: ", teamData?.invite_code);
                    }
                  }}
                >
                  {codeCopied ? (
                    <TbCopyCheck className="text-blockathon-green" />
                  ) : (
                    <TbCopy />
                  )}
                </button>
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
          <div className="flex items-center justify-center max-sm-420:gap-4 gap-6 w-full max-sm-420:mb-6 max-sm:mb-[25px] mb-[50px]">
            <TeamButton
              onclick={() => {
                setteamActions("create");
                setInputData("");
              }}
              text={"Create Team"}
              selected={teamActions === "create"}
            />
            <TeamButton
              onclick={() => {
                setteamActions("join");
                setInputData("");
              }}
              text={"Join Team"}
              selected={teamActions !== "create"}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full items-center "
          >
            <div className="relative w-full flex">
              <Input
                className={"mx-10 w-full text-black"}
                icon={projectblack}
                onchange={(event) => {
                  setInputData(event.target.value);
                }}
                value={inputData}
                placeholder={
                  teamActions === "create" ? "Team Name" : "Invite Code"
                }
              />
            </div>
            <HackerButton
              loading={loading}
              type={"submit"}
              text={teamActions === "create" ? "Create Team" : "Join Team"}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Team;
