import { useEffect, useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import previouSvg from "../../assets/icons/previousArrow.svg";
import bg_image from "../../assets/blogathon_bg.png";
import { Input, SelectInput } from "../../Components/Input";
import emailSvg from "../../assets/icons/email.svg";
import personSvg from "../../assets/icons/person.svg";
import phoneSvg from "../../assets/icons/phone.svg";
import genderSvg from "../../assets/icons/gender.svg";
import { Button } from "../../Components/Buttons";
import { IoIosArrowForward } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { MdLocationPin, MdOutlineWork } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import mailSent from "../../assets/mail_sent.png";
import { ReactSwal } from "../../utils/swal";
import { BiLogoWhatsapp } from "react-icons/bi";
import { useSelector } from "react-redux";

/**
 * Event Registration is in 2 steps:
 * 1. Email is collected and checked against the database
 * 2. We collect their details. [Endpoints called depend on if the user exists already or not]
 * If user exists in step 1, we prefill the users data.
 */
const EventsRegistration = () => {
  const { blockathon_id } = useSelector((state) => state.app);
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetails] = useState(null);
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
              if (currentStep > 1) {
                setCurrentStep(1);
                return;
              }

              navigate(-1);
            }}
          >
            <img src={previouSvg} alt="Go Back" className="h-6 max-sm:h-4" />
          </button>
        </div>
        <div className="flex mx-auto my-auto gap-12 max-sm:gap-6 flex-col max-lg:w-full">
          <h1 className="flex justify-center flex-wrap text-white font-black mx-auto max-sm-420:text-[1rem] max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[2rem] text-[2.75rem] text-nowrap gap-1.5 font-raleway">
            <span className="flex gap-1.5">
              Register for{" "}
              <span className="text-blockathon-green uppercase">
                Blockathon
              </span>
            </span>
            <span>(Conference 3.0)</span>
          </h1>
          <EmailStep
            step={currentStep}
            setStep={setCurrentStep}
            setUserDetails={setUserDetails}
          />
          <DetailsStep
            userDetails={userDetails}
            eventId={blockathon_id}
            step={currentStep}
          />
        </div>
      </div>
    </section>
  );
};

const EmailStep = ({ step, setStep, setUserDetails }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get user details
      setLoading(true);
      const { data } = await customAxios
        .unprotected()
        .get(API_ROUTES.users.getByEmail + email);

      setUserDetails(data?.data);
      setStep(2);
      setLoading(false);
    } catch (error) {
      console.log(error);

      // If status is 404, move to step 2
      if (error.status === 404) {
        setUserDetails({ email });
        setStep(2);
        setLoading(false);
        return;
      }

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
    <div className={(step === 1 ? "flex " : "hidden ") + " w-full flex-col "}>
      <form className="flex flex-col w-full gap-12" onSubmit={handleSubmit}>
        <div className="flex w-full ">
          <Input
            icon={emailSvg}
            type={"text"}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="flex max-sm-420:w-36 w-48 max-sm:-mt-6 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button
            text={"Next"}
            icon={<IoIosArrowForward />}
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

const DetailsStep = ({ userDetails, eventId, step }) => {
  const [lockInput, setLockInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [registrationDetails, setRegisterationDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    techCareer: "",
    expirenceLevel: "",
    student: "",
    attendingFrom: "",
    willParticipateInHackathon: "",
  });

  // Prefill and lock certain inputs
  useEffect(() => {
    if (
      userDetails?.first_name &&
      userDetails?.last_name &&
      userDetails?.email
    ) {
      setLockInput(true);
      setRegisterationDetails((prev) => {
        return {
          ...prev,
          firstName: userDetails?.first_name,
          lastName: userDetails?.last_name,
          email: userDetails?.email,
        };
      });
    } else if (userDetails?.email) {
      setRegisterationDetails((prev) => {
        return {
          ...prev,
          email: userDetails?.email,
        };
      });
    }
  }, [userDetails?.first_name, userDetails?.last_name, userDetails?.email]);

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
      Swal.fire({
        icon: "error",
        text: "Please answer all questions",
      });
      setLoading(false);
      return;
    }

    try {
      // If the user does not exist as acommunity member, add Him/Her
      if (!userDetails?.first_name) {
        const formData = new FormData();
        formData.append("email", registrationDetails.email);
        formData.append("firstName", registrationDetails.firstName);
        formData.append("lastName", registrationDetails.lastName);
        formData.append("techSkills", registrationDetails.techCareer);
        formData.append("phoneNumber", registrationDetails.phoneNumber);
        formData.append("gender", registrationDetails.gender);

        // Make user a community member
        await customAxios.multipartForm
          .unprotected()
          .post(API_ROUTES.users.create, formData);
      }

      // Register user for event
      await customAxios
        .unprotected()
        .post(API_ROUTES.events.registration + eventId, registrationDetails);
      ReactSwal.fire({
        showConfirmButton: false,
        html: (
          <div className="flex font-raleway text-black flex-col gap-2 justify-center px-6 py-6">
            <h1 className="text-black font-black mx-auto text-[1.5rem]">
              <b>Successful Registration</b>
            </h1>
            <div className="text-center text-[0.875rem]">
              <span>You have successfully registered for blockathon.</span>
              <span>
                Confirmation email has been sent to {registrationDetails.email}
              </span>
              <br />
              <span>
                Join our Whatsapp group for the oppourtunity to network with
                other event attendees and for the latest updates about
                Blogathon.
              </span>
            </div>
            <div className="flex mx-auto pt-4">
              <img src={mailSent} className="w-36 h-36" alt="Success" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-center pt-4">
              <a
                href="https://chat.whatsapp.com/DEYnsVLHv6KJU4jirzsakm"
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
              Register for the Hackathon
            </button>
          </div>
        ),
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/blockathon/hackathon/registration");
        } else {
          navigate("/blockathon");
        }
      });
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
    setRegisterationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value,
    });
  };

  // For the custom select inputs
  const handleSelect = (name, value) => {
    setRegisterationDetails({
      ...registrationDetails,
      [name]: value,
    });
  };

  return (
    <div className={(step === 2 ? "flex " : "hidden ") + " w-full "}>
      <form className="flex w-full flex-col gap-4 " onSubmit={handleSubmit}>
        <div className="flex w-full gap-4 max-md:flex-col">
          <Input
            icon={personSvg}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            required
            value={registrationDetails.firstName}
            disabled={lockInput}
          />
          <Input
            icon={personSvg}
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            required
            value={registrationDetails.lastName}
            disabled={lockInput}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <Input
            icon={emailSvg}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            value={registrationDetails.email}
            disabled={Boolean(registrationDetails?.email)}
          />
          <Input
            icon={phoneSvg}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            required
            value={registrationDetails.phoneNumber}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            icon={genderSvg}
            name="gender"
            onChange={handleSelect}
            placeholder="Select a Gender"
            options={["Male", "Female"]}
            required
            value={registrationDetails.gender}
          />
          <SelectInput
            iconComponent={<PiStudentFill size={"1.75rem"} className="-mr-2" />}
            name="student"
            onChange={handleSelect}
            placeholder="Are you a Student?"
            options={["Yes", "No"]}
            required
            value={registrationDetails.student}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            iconComponent={<MdOutlineWork size={"1.5rem"} className="-mr-2" />}
            name="techCareer"
            onChange={handleSelect}
            placeholder="What Tech Career are you Intrested in?"
            options={[
              "Programming",
              "Designing",
              "Product Management",
              "Community Management",
              "Copywriting",
              "Marketing",
              "Others",
            ]}
            required
            value={registrationDetails.techCareer}
          />
          <SelectInput
            iconComponent={
              <FaPersonWalking size={"1.5rem"} className="-mr-2" />
            }
            name="expirenceLevel"
            onChange={handleSelect}
            placeholder="Experience level choosen career"
            options={[
              "0-2 years",
              "3-5 years",
              "5-7years",
              "More than 7 years",
            ]}
            required
            value={registrationDetails.expirenceLevel}
          />
        </div>
        <div className="flex w-full gap-4 max-md:flex-col">
          <SelectInput
            iconComponent={<MdLocationPin size={"1.5rem"} className="-mr-2" />}
            name="attendingFrom"
            onChange={handleSelect}
            placeholder="Where are you attending from"
            options={["UNEC", "UNN", "Others"]}
            required
            value={registrationDetails.attendingFrom}
          />

          <SelectInput
            iconComponent={<FaCode size={"1.5rem"} className="-mr-2" />}
            name="willParticipateInHackathon"
            onChange={handleSelect}
            placeholder="Will you participate in the Hackathon?"
            options={[
              "Yes, In definetely will",
              "No, I won't be able to",
              "Probably, not sure",
            ]}
            required
            value={registrationDetails.willParticipateInHackathon}
          />
        </div>

        <div className="flex max-sm:w-36 w-48 max-sm:pt-6 pt-12 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button text={"Register"} loading={loading} />
        </div>
        <div className="flex w-full">
          <Link
            className="mx-auto text-white underline max-sm:text-[0.875rem]"
            to={"/blockathon/hackathon/registration"}
          >
            Want to participate in the Hackathon?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EventsRegistration;
