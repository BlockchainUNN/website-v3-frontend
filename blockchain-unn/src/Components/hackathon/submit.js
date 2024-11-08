import React, { useState } from "react";
import not_ready from "../../assets/icons/not-submission.svg";
import close_svg from "../../assets/icons/close-svg.svg";
import projectName from "../../assets/icons/submit-name.svg";
import projectDescription from "../../assets/icons/submit-description.svg";
import projectLink from "../../assets/icons/submit-link.svg";
import githubIcon from "../../assets/icons/github.svg";
import uploadIcon from "../../assets/icons/submit-upload.svg";
import { CustomSelect } from "./customSelect";
import { HackerButton } from "./button";
import { BiArrowBack } from "react-icons/bi";
import { API_ROUTES, customAxios } from "../../api.routes";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [images, setImages] = useState();

  const { hackathon_id, teamDetails } = useSelector((state) => state.app);
  const [loading, setLoading] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState({
    name: "",
    description: "",
    category: "",
    liveLink: "",
    githubLink: "",
    demoVideoLink: "",
    documentationLink: "",
  });

  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };

  const onChange = (event) => {
    setSubmissionDetails({
      ...submissionDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (!teamDetails?.id) {
        Swal.fire({
          text: "Please join or create a team before submitting.",
          icon: "error",
        });
        return;
      }

      const formData = new FormData();
      formData.append("name", submissionDetails.name);
      formData.append("description", submissionDetails.description);
      formData.append("category", submissionDetails.category);
      formData.append("liveLink", submissionDetails.liveLink);
      formData.append("githubLink", submissionDetails.githubLink);
      formData.append("demoVideoLink", submissionDetails.demoVideoLink);
      formData.append("documentationLink", submissionDetails.documentationLink);

      // for (let index = 0; index < images.length; index++) {
      //   formData.append("images", images[index]);
      // }

      await customAxios.multipartForm
        .protected()
        .post(
          API_ROUTES.submissions.create + `${hackathon_id}/${teamDetails.id}`,
          formData
        );

      setLoading(false);
      Swal.fire({
        text: "You've successfully submitted your project.",
        icon: "success",
      }).finally(() => navigate("/event/hackathon#project"));
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
  };

  return (
    <div className="relative max-sm-420:w-full w-[80%] xl:w-[60%] max-sm-420:h-fit max-sm-420:min-h-fit min-h-[520px] mx-auto bg-white max-sm-420:rounded-2xl rounded-[26px] flex flex-col items-center py-[12px] max-sm-420:px-[9px] px-[18px] max-sm-420:gap-2 gap-4">
      <div className="w-full flex flex-col items-center relative max-sm:h-[35px] h-[70px] mb-3">
        <h2 className="max-sm-420:text-[1.5rem] max-sm:text-[2rem] text-[57px] font-raleway-black text-white text-center self-center relative w-full h-full justify-self-center flex items-center gap-2">
          <span className="absolute -left-[1px] top-[1px] text-stroke w-full self-center">
            SUBMIT PROJECT
          </span>
          <span className="absolute left-[1px] -top-[1px] bg-clip-text text-transparent bg-gradient-to-b from-black to-[#1B1A1A] w-full self-center">
            SUBMIT PROJECT
          </span>
        </h2>

        <div className="absolute flex h-full right-[2rem]">
          <div className="flex gap-2 my-auto pt-8 ">
            <button
              onClick={() => setStep(1)}
              className="w-6 h-2 bg-black"
            ></button>
            <button
              onClick={() => setStep(2)}
              className={(step === 2 ? "bg-black " : "bg-grey-3 ") + " w-6 h-2"}
            ></button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div
          className={
            (step === 1 ? "flex " : "hidden ") + " flex-col w-full gap-3"
          }
        >
          <Input
            name={"name"}
            onchange={onChange}
            icon={projectName}
            placeholder={"Project Name"}
          />
          <CustomSelect
            placeholder="Select a Category"
            onChange={(option) => {
              setSubmissionDetails({
                ...submissionDetails,
                category: option,
              });
            }}
            options={[
              "Real World Assets (RWAs)",
              "Digital Collectibles",
              "Open Governance",
              "Financial inclusion & Education",
              "Entertainment & Media",
              "Open Idea",
            ]}
          />
          <TextBox
            name={"description"}
            onchange={onChange}
            icon={projectDescription}
            placeholder={"Description of Project"}
          />
          <Input
            name={"liveLink"}
            onchange={onChange}
            icon={projectLink}
            placeholder={"Live Link"}
          />
        </div>

        <div
          className={
            (step === 2 ? "flex " : "hidden ") + " flex-col w-full gap-3"
          }
        >
          <Input
            name={"githubLink"}
            onchange={onChange}
            icon={githubIcon}
            placeholder={"GitHub Link"}
          />
          <Input
            name={"demoVideoLink"}
            onchange={onChange}
            icon={uploadIcon}
            placeholder={"Demo video link"}
          />
          <Input
            name={"documentationLink"}
            onchange={onChange}
            icon={projectLink}
            placeholder={"Documentation link"}
          />
          <ImageInput
            onchange={(event) => {
              setImages(event.target.files);
            }}
            icon={uploadIcon}
            placeholder={"Upload images"}
          />
        </div>

        <div className="flex w-full pb-6 pt-2">
          {step === 2 && (
            <HackerButton
              onclick={() => {
                setStep(1);
              }}
              text={<BiArrowBack />}
            />
          )}
          <HackerButton
            onclick={() => {
              if (step === 1) {
                setStep(2);
                return;
              }

              // Back to previous step if field is empty
              if (
                !submissionDetails.name ||
                !submissionDetails.description ||
                !submissionDetails.category ||
                !submissionDetails.liveLink
              )
                setStep(1);
              // setModalOpen(true);
            }}
            loading={loading}
            text={step === 1 ? "Next" : "Submit"}
            type={step === 1 ? "button" : "submit"}
          />
        </div>
      </form>

      {modalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[26px]">
          <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-lg text-center w-[88%] h-[85%]">
            <img
              src={close_svg}
              onClick={closeModal}
              alt="Close Modal"
              className="cursor-pointer w-[33.59px] h-[33.65px] self-end"
            />
            <h3 className="text-[36px] font-raleway-semibold">
              Hasn't started
            </h3>
            <p className="text-[24px] font-raleway-medium mb-[4rem]">
              Submission starts on the 29th of October
            </p>

            <img
              src={not_ready}
              alt="Not Ready"
              className="w-[226px] h-[194.31px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Submit;

export const Input = ({
  icon,
  placeholder,
  className,
  onchange,
  value,
  name,
}) => {
  return (
    <div
      className={
        " flex gap-2 border border-black rounded-md text-grey-2 max-sm-420:mx-4 mx-10 max-sm-420:px-3 px-5 max-sm-420:py-2 py-3 " +
        (className ? className : "")
      }
    >
      <div className="my-auto">
        <img src={icon} alt={placeholder} />
      </div>
      <input
        onChange={onchange}
        value={value}
        className="font-raleway max-sm-420:text-[1rem] text-[1.3rem] flex w-full border-none outline-none"
        placeholder={placeholder}
        required
        name={name}
      />
    </div>
  );
};

const ImageInput = ({ icon, placeholder, className, name, onchange }) => {
  return (
    <div
      className={
        " flex gap-2 border border-black rounded-md text-grey-2 max-sm-420:mx-4 mx-10 max-sm-420:px-3 px-5 max-sm-420:py-2 py-3 " +
        (className ? className : "")
      }
    >
      <div className="my-auto">
        <img src={icon} alt={placeholder} />
      </div>
      <input
        type={"file"}
        multiple
        className="font-raleway max-sm-420:text-[1rem] text-[1.3rem] flex w-full border-none outline-none"
        placeholder={placeholder}
        onChange={onchange}
        name={name}
      />
    </div>
  );
};

const TextBox = ({ icon, placeholder, name, onchange }) => {
  return (
    <div className="flex gap-2 border border-black rounded-md text-grey-2 max-sm-420:mx-4 mx-10 max-sm-420:px-3 px-5 max-sm-420:py-2 py-3">
      <div className="">
        <img src={icon} alt={placeholder} />
      </div>
      <textarea
        name={name}
        onChange={onchange}
        maxLength={520}
        className="font-raleway max-sm-420:text-[1rem] text-[1.3rem] min-h-[2rem] h-[8rem] flex w-full border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
