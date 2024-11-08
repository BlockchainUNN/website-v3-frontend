import { useEffect, useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineOpenInNew } from "react-icons/md";
import Swal from "sweetalert2";

const Project = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { hackathon_id, teamDetails } = useSelector((state) => state.app);

  useEffect(() => {
    // Get project if any
    if (!project && teamDetails?.id) {
      (async () => {
        try {
          setLoading(true);
          const { data } = await customAxios
            .protected()
            .get(
              API_ROUTES.submissions.get + `${hackathon_id}/${teamDetails.id}`
            );
          console.log(data);
          setProject(data?.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          // Handle other errors
          Swal.fire({
            icon: "error",
            text:
              error?.response?.data?.error ||
              error?.message ||
              "Something went wrong, Please try again.",
          });
          setLoading(false);
        }
      })();
    } else {
      setLoading(false);
    }
  }, [hackathon_id, project, teamDetails?.id]);

  function convertYouTubeUrlToEmbed(url) {
    // Extract the video ID from the YouTube URL
    const videoId = url.split("youtu.be/")[1];
    // Return the embed URL
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="max-sm-420:w-full w-[80%] xl:w-[60%] h-fit mx-auto bg-white max-sm-420:rounded-2xl rounded-[26px] flex flex-col items-center py-[20px] max-sm-420:px-[9px] px-[18px] gap-4">
      <div className="w-full flex flex-col items-center max-sm:h-[35px] h-[70px] mb-3">
        <h2 className="max-sm-420:text-[1.5rem] max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center line-clamp-2">
            {project?.project_name ? project?.project_name : "PROJECT OVERVIEW"}
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center line-clamp-2">
            {project?.project_name ? project?.project_name : "PROJECT OVERVIEW"}
          </span>
        </h2>
      </div>

      <div className="w-[90%] min-h-[18rem]">
        {loading ? (
          <>
            <div className="flex w-full py-4">
              <span className="text-pretty text-center font-raleway max-sm-420:text-[1rem] text-[1.2rem] mx-auto">
                Loading...
              </span>
            </div>
          </>
        ) : project ? (
          <>
            <div className="flex flex-col w-full max-sm:pt-8 pt-20 gap-4">
              <div className="flex flex-row max-sm:flex-col w-full h-fit">
                <div className="flex w-3/4">
                  <iframe
                    width="560"
                    height="315"
                    src={convertYouTubeUrlToEmbed(project?.demo_video_link)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex h-fit my-auto">
                  <ul className="flex flex-col max-sm:flex-row flex-col h-fit">
                    {project?.images.map((image, index, arr) => {
                      if (index > 2) return <></>;
                      return (
                        <div className="flex relative h-1/3">
                          <img
                            className="flex object-fit h-full"
                            src={image?.image_url}
                            alt={project?.project_name + " image " + index}
                          />
                          {arr.length > 3 && index === 2 && (
                            <span className="absolute h-full bg-black/60 justify-center flex w-full top-0 left-0">
                              <span className="my-auto flex text-[2rem] font-raleway text-white ">
                                +1
                              </span>
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col w-full font-raleway gap-2">
                <h2 className="flex flex-col gap-1">
                  <span className="flex text-[1.5rem] max-sm:text-[1.2rem] font-raleway-semibold">
                    Project Category:{" "}
                  </span>
                  <p className="text-[1.2rem] max-sm:text-[1rem]">
                    {project?.category}
                  </p>
                </h2>

                <div className="flex flex-col gap-1">
                  <span className="flex text-[1.5rem] max-sm:text-[1.2rem] font-raleway-semibold">
                    Description:{" "}
                  </span>
                  <p className="text-[1.2rem] max-sm:text-[1rem]">
                    {project?.project_description}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="flex text-[1.5rem] max-sm:text-[1.2rem] font-raleway-semibold">
                    Github{" "}
                    {project?.github_links.split(",").length > 1
                      ? "Links"
                      : "Link"}
                  </span>
                  <ul className="flex w-full flex-col text-[1.2rem] max-sm:text-[1rem] gap-0.5">
                    {project?.github_links.split(",").map((link) => (
                      <li>
                        <Link
                          target={"_blank"}
                          className="flex gap-1"
                          to={link}
                        >
                          <span className="truncate my-auto">{link}</span>
                          <div className="flex my-auto min-w-[2rem]">
                            <MdOutlineOpenInNew
                              className="text-grey-2 my-auto"
                              size={"1rem"}
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="flex text-[1.5rem] max-sm:text-[1.2rem] font-raleway-semibold">
                    Project Documentation
                  </span>
                  <ul className="flex w-full flex-col text-[1.2rem] max-sm:text-[1rem] gap-0.5">
                    <li>
                      <Link
                        target={"_blank"}
                        className="flex gap-1"
                        to={project?.documentation_link}
                      >
                        <span className="truncate my-auto">
                          {project?.documentation_link}
                        </span>
                        <div className="flex my-auto min-w-[2rem]">
                          <MdOutlineOpenInNew
                            className="text-grey-2 my-auto"
                            size={"1rem"}
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="flex text-[1.5rem] max-sm:text-[1.2rem] font-raleway-semibold">
                    Demo Link
                  </span>
                  <ul className="flex w-full flex-col text-[1.2rem] max-sm:text-[1rem] gap-0.5">
                    <li>
                      <Link
                        target={"_blank"}
                        className="flex gap-2"
                        to={project?.live_demo_link}
                      >
                        <span className="truncate my-auto">
                          {project?.live_demo_link}
                        </span>
                        <div className="flex my-auto min-w-[2rem]">
                          <MdOutlineOpenInNew
                            className="text-grey-2 my-auto"
                            size={"1rem"}
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-pretty text-center font-raleway max-sm-420:text-[1rem] text-[1.2rem] max-sm:text-[1rem]">
            Your team hasn't added any projects. Ready to submit? Head over to
            the{" "}
            <button
              className="underline"
              onClick={() => {
                window.location.hash = "submit";
              }}
            >
              Submit Tab
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
