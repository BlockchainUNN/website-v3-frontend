import { useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import previouSvg from "../../assets/icons/previousArrow.svg";
import bg_image from "../../assets/blogathon_bg.png";
import { Input, SelectInput, TextInput } from "../../Components/Input";
import { Button } from "../../Components/Buttons";
import {
  FaGenderless,
  FaGraduationCap,
  FaPersonWalking,
  FaPhone,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import mailSent from "../../assets/mail_sent.png";
import { ReactSwal } from "../../utils/swal";
import { MdEmail, MdEventAvailable, MdTrackChanges } from "react-icons/md";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { BiLogoWhatsapp } from "react-icons/bi";

const DevBootcampRegistration = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{ backgroundImage: `url(${bg_image})` }}
      className="flex w-screen h-screen bg-cover bg-no-repeat bg-scroll"
    >
      <div className="flex flex-col gap-8 w-full h-full bg-black/75 py-12 max-sm-420:px-4 max-sm:px-10 max-lg:px-20 px-32 overflow-y-auto">
        <div className="flex w-full justify-start fixed top-0 left-0 max-sm-420:py-6 max-md:py-8 py-12 max-sm-420:px-4 max-lg:px-10 px-20">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={previouSvg} alt="Go Back" className="h-6 max-sm:h-4" />
          </button>
        </div>
        <div className="flex mx-auto my-auto gap-12 max-sm:gap-6 flex-col max-lg:w-full">
          <h1 className="flex flex-col justify-center flex-nowrap text-white font-black mx-auto max-sm-420:text-[1rem] max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[2rem] text-[2.75rem] text-nowrap font-raleway">
            <span className="flex gap-1.5">
              Register for{" "}
              <span className="text-blockathon-green uppercase">
                BlockchainUNN's
              </span>
            </span>
            <span className="mx-auto max-sm-420:text-[0.875rem] max-sm:text-[1rem] max-md:text-[1.2rem] max-lg:text-[1.5rem] text-[2.5rem]">
              Developer's Bootcamp
            </span>
          </h1>
          <Details />
        </div>
      </div>
    </section>
  );
};

const Details = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [registrationDetails, setRegisterationDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    track: "",
    levelOfExperience: "",
    goals: "",
    gender: "",
    student: "",
    location: "",
    availability: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Validation
    const registrationKeys = Object.keys(registrationDetails);
    const emptyFields = registrationKeys.filter((key) => {
      if (!registrationDetails[key]) {
        return key;
      } else {
        return undefined;
      }
    });

    if (emptyFields?.length > 0) {
      if (!(emptyFields.includes("location") && emptyFields.length === 1)) {
        Swal.fire({
          icon: "error",
          text: "Please answer all questions",
        });
        setLoading(false);
        return;
      }
    }

    try {
      const { data } = await customAxios
        .unprotected()
        .post(API_ROUTES.bootcamp.register, registrationDetails);

      ReactSwal.fire({
        showConfirmButton: false,
        html: (
          <div className="flex font-raleway text-black flex-col gap-2 justify-center px-6 py-6">
            <h1 className="text-black font-black mx-auto text-[1.5rem]">
              <b>Successful Registration</b>
            </h1>
            <div className="text-left flex flex-col text-[0.875rem]">
              <span>
                You have successfully registered for the bootcamp. Confirmation
                email has been sent to{" "}
                <b className="text-black underline">
                  {registrationDetails.email}
                </b>
              </span>
            </div>
            <div className="flex mx-auto pt-4">
              <img src={mailSent} className="w-36 h-36" alt="Success" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-center pt-4">
              <a
                href={
                  registrationDetails.track.includes("2")
                    ? "https://chat.whatsapp.com/FuLO5uSJg9H0IcNt754GsO"
                    : "https://chat.whatsapp.com/IO850f4zkHTFoszE93wLni"
                }
                target={"_blank"}
                rel="noreferrer"
                className="flex gap-2 justify-center mx-auto p-2 rounded-md bg-green-400 cusor-pointer text-white"
              >
                <BiLogoWhatsapp className="my-auto" color="white" />
                <span className="text-[0.875rem] my-auto">
                  Join Us on Whatsapp
                </span>
              </a>
            </div>
            <button
              className="rounded-md mx-auto text-[0.875rem] px-4 py-2 bg-purple-400 text-white font-medium"
              onClick={() => {
                Swal.clickConfirm();
              }}
            >
              Continue
            </button>
          </div>
        ),
      }).finally(() => navigate("/"));
      setLoading(false);
    } catch (error) {
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

  const handleChange = (event) => {
    let value =
      event.target.name === "phoneNumber"
        ? event.target.value.trim()
        : event.target.value;
    setRegisterationDetails({
      ...registrationDetails,
      [event.target.name]: value,
    });
  };

  // For the custom select inputs
  const handleSelect = async (name, value) => {
    let userValue = value;
    if (value.toLowerCase() === "yes") {
      Swal.fire({
        text: "Please, what's the name of your university, level of study and your department/faculty?",
        input: "text",
      }).then((result) => {
        if (result.isConfirmed) {
          userValue = result.value;
          setRegisterationDetails({
            ...registrationDetails,
            location: userValue,
            student: "Yes",
          });
        }
      });
      return;
    }

    if (name === "track") {
      setRegisterationDetails({
        ...registrationDetails,
        [name]: userValue.toLowerCase().includes("web2") ? "web2" : "web3",
      });
      return;
    }

    setRegisterationDetails({
      ...registrationDetails,
      [name]: userValue,
    });
  };

  return (
    <div className={"flex w-full "}>
      <form className="flex w-full flex-col gap-4 " onSubmit={handleSubmit}>
        <div className="flex w-full gap-4 max-md:flex-col">
          <Input
            iconComponent={<FaUser size={"1.5rem"} className="-mr-1" />}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            required
            value={registrationDetails.firstName}
          />
          <Input
            iconComponent={<FaUser size={"1.5rem"} className="-mr-1" />}
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            required
            value={registrationDetails.lastName}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <Input
            iconComponent={<MdEmail size={"1.5rem"} className="-mr-1" />}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            value={registrationDetails.email}
          />
          <Input
            iconComponent={<FaPhone size={"1.5rem"} className="-mr-1" />}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            required
            value={registrationDetails.phoneNumber}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            iconComponent={<MdTrackChanges size={"1.5rem"} className="-mr-1" />}
            name="track"
            onChange={handleSelect}
            placeholder="Select a Track"
            options={[
              "Web2 track (HTML, CSS, JavaScript & React) - For newbies & intermediates only",
              "Web3 track (Solidity, EthersJS & Web3js) - For existing web developers only",
            ]}
            required
            wrapPlaceholder
            value={registrationDetails.track}
          />
          <SelectInput
            iconComponent={
              <FaPersonWalking size={"1.5rem"} className="-mr-2" />
            }
            name="levelOfExperience"
            onChange={handleSelect}
            placeholder="Experience level in track"
            options={[
              "Newbie",
              "Beginner",
              "Intermediate",
              "Competent",
              "Advanced",
              "Expert",
            ]}
            required
            value={registrationDetails.levelOfExperience}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            iconComponent={<FaGenderless size={"1.5rem"} className="-mr-1" />}
            name="gender"
            onChange={handleSelect}
            placeholder="Gender"
            options={["Male", "Female"]}
            required
            value={registrationDetails.gender}
          />
          <SelectInput
            iconComponent={<PiStudent size={"1.5rem"} className="-mr-1" />}
            name="student"
            onChange={handleSelect}
            placeholder="Are you a student?"
            options={["No", "Yes"]}
            required
            value={registrationDetails.student}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            iconComponent={
              <MdEventAvailable size={"1.5rem"} className="-mr-1" />
            }
            name="availability"
            onChange={handleSelect}
            placeholder="Can you attend in-person classes?"
            options={[
              "Yes, I can attend regularly",
              "No, I am uncertain about my availability",
            ]}
            required
            wrapPlaceholder={true}
            value={registrationDetails.availability}
          />
          <TextInput
            iconComponent={
              <FaGraduationCap size={"1.5rem"} className="-mr-1" />
            }
            name="goals"
            onChange={handleChange}
            placeholder="What do you hope to gain by the end of this Bootcamp?"
            required
            value={registrationDetails.goals}
          />
        </div>

        <div className="flex max-sm:w-36 w-48 max-sm:pt-6 pt-12 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button text={"Register"} loading={loading} />
        </div>
        <div className="flex w-full">
          {/* <Link
            className="mx-auto text-white underline max-sm:text-[0.875rem]"
            to={"/"}
          >
            Want to participate in the Hackathon?
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default DevBootcampRegistration;
