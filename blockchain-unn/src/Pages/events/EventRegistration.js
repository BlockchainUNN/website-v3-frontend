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

/**
 * Event Registration is in 2 steps:
 * 1. Email is collected and checked against the database
 * 2. We collect their details. [Endpoints called depend on if the user exists already or not]
 * If user exists in step 1, we prefill the users data.
 */
const EventsRegistration = () => {
  const BLOGATNON_ID = "d23893ee-b2b2-449d-bd03-f4a97f2e54eb"; // Todo: Make this dynamic
  const [currentStep, setCurrentStep] = useState(2);
  const [userDetails, setUserDetails] = useState(null);

  console.log("step ==> ", currentStep);

  return (
    <section
      style={{ backgroundImage: `url(${bg_image})` }}
      className="flex w-screen h-screen bg-cover bg-no-repeat bg-scroll"
    >
      <div className="flex flex-col gap-8 w-full h-full bg-black/75 py-12 px-20 overflow-y-auto">
        <div className="flex w-full justify-start fixed top-0 left-0 py-12 px-20">
          <button>
            <img src={previouSvg} alt="Go Back" className="h-6" />
          </button>
        </div>
        <div className="flex mx-auto my-auto gap-12 flex-col">
          <h1 className="flex text-white font-black text-[2.75rem] text-nowrap gap-1.5 font-raleway">
            Register for{" "}
            <span className="text-blockathon-green uppercase">Blockathon</span>{" "}
            (Confrence 3.0)
          </h1>
          <EmailStep
            step={currentStep}
            setStep={setCurrentStep}
            setUserDetails={setUserDetails}
          />
          <DetailsStep
            userDetails={userDetails}
            eventId={BLOGATNON_ID}
            step={currentStep}
          />
        </div>
      </div>
    </section>
  );
};

const EmailStep = ({ step, setStep, setUserDetails }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get user details
      const { data } = await customAxios
        .unprotected()
        .get(API_ROUTES.users.getByEmail + email);
      setUserDetails(data?.data);
      setStep(2);
    } catch (error) {
      // If status is 404, move to step 2
      if (error.status === 404) {
        setUserDetails({ email });
        setStep(2);
        return;
      }
      // Todo: Handle other errors
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

        <div className="flex w-48 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button text={"Next"} icon={<IoIosArrowForward />} />
        </div>
      </form>
    </div>
  );
};

const DetailsStep = ({ userDetails, eventId, step }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [lockInput, setLockInput] = useState(false);
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
    willParticipateInHackathon: false,
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
    }
  }, [userDetails?.first_name, userDetails?.last_name, userDetails?.email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

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

        const { data } = await customAxios.multipartForm
          .unprotected()
          .post(API_ROUTES.users.create, formData);
        console.log(data);
      }

      // Register user for event
      const response = await customAxios
        .unprotected()
        .post(API_ROUTES.events.registration + eventId, registrationDetails);
      console.log(response);
      showSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setRegisterationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <div className={(step === 2 ? "flex " : "hidden ") + " w-full "}>
        <form className="flex w-full flex-col gap-4 " onSubmit={handleSubmit}>
          <div className="flex w-full gap-6">
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
          <div className="flex w-full gap-4">
            <Input
              icon={emailSvg}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
              value={registrationDetails.email}
              disabled={lockInput}
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
          <div className="flex w-full gap-4">
            <SelectInput
              icon={genderSvg}
              name="gender"
              onChange={handleChange}
              placeholder="Select a Gender"
              options={["male", "female"]}
              required
              value={registrationDetails.gender}
            />
            <SelectInput
              iconComponent={
                <PiStudentFill size={"1.75rem"} className="-mr-2" />
              }
              name="student"
              onChange={handleChange}
              placeholder="Are you a Student?"
              options={["yes", "no"]}
              required
              value={registrationDetails.student}
            />
          </div>
          <div className="flex w-full gap-4">
            <SelectInput
              iconComponent={
                <MdOutlineWork size={"1.75rem"} className="-mr-2" />
              }
              name="techCareer"
              onChange={handleChange}
              placeholder="What Tech Career are you Intrested in?"
              options={[
                "programming",
                "designing",
                "product management",
                "community management",
                "copywriting",
                "marketing",
              ]}
              required
              value={registrationDetails.techCareer}
            />
            <SelectInput
              iconComponent={
                <FaPersonWalking size={"1.75rem"} className="-mr-2" />
              }
              name="expirenceLevel"
              onChange={handleChange}
              placeholder="Experience level"
              options={["0-2 years", "3-5 years", "5-7years"]}
              required
              value={registrationDetails.expirenceLevel}
            />
          </div>
          <div className="flex w-full gap-4">
            <SelectInput
              iconComponent={
                <MdLocationPin size={"1.75rem"} className="-mr-2" />
              }
              name="attendingFrom"
              onChange={handleChange}
              placeholder="Where are you attending from"
              options={["UNEC", "UNN", "Others"]}
              required
              value={registrationDetails.attendingFrom}
            />

            <SelectInput
              iconComponent={<FaCode size={"1.75rem"} className="-mr-2" />}
              name="willParticipateInHackathon"
              onChange={handleChange}
              placeholder="Hackathon?"
              options={[
                "yes, In definetely will",
                "no, I won't be able to",
                "Probably, not sure",
              ]}
              required
              value={registrationDetails.willParticipateInHackathon}
            />
          </div>

          <div className="flex w-48 pt-12 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
            <Button text={"Register"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EventsRegistration;
