import { useEffect, useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import previouSvg from "../../assets/icons/previousArrow.svg";
import bg_image from "../../assets/blogathon_bg.png";
import { Input, SelectInput } from "../../Components/Input";
import emailSvg from "../../assets/icons/email.svg";
import personSvg from "../../assets/icons/person.svg";
import genderSvg from "../../assets/icons/gender.svg";
import { Button } from "../../Components/Buttons";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import mailSent from "../../assets/mail_sent.png";
import { ReactSwal } from "../../utils/swal";
import { BiLogoTelegram } from "react-icons/bi";
import { useSelector } from "react-redux";

/**
 * Hackathon Registration is in 2 steps:
 * 1. Email is collected and checked against the database to see if they have registered for blockathon
 * 2. Then we send them the registeration link in their emails, part of their verification.
 */
const HackathonRegistration = () => {
  const { hackathon_id, blockathon_id } = useSelector((state) => state.app);
  const HACKATHON_ID = hackathon_id;
  const BLOCKATHON_ID = blockathon_id;
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const Step1Header = () => (
    <h1 className="flex justify-center flex-wrap text-white font-black mx-auto max-sm-420:text-[1rem] max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[2rem] text-[2.75rem] text-nowrap gap-1.5 font-raleway">
      <span className="flex gap-1.5">
        Register for{" "}
        <span className="text-blockathon-green uppercase">Blockathon</span>
      </span>
      <span>(Hackathon)</span>
    </h1>
  );

  const Step2Header = () => (
    <h1 className="flex justify-center flex-col text-white font-black mx-auto max-sm-420:text-[1rem] max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[2rem] text-[2.75rem] text-nowrap gap-1.5 font-raleway">
      <span className="flex gap-2 mx-auto">
        Create an <span className="text-blockathon-green">Account</span>
      </span>
      <span className="text-white font-normal mx-auto max-sm-420:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] text-nowrap font-raleway">
        Enter your details to become a hacker
      </span>
    </h1>
  );

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
          {currentStep === 1 ? <Step1Header /> : <Step2Header />}
          <EmailStep
            step={currentStep}
            setStep={setCurrentStep}
            setUserDetails={setUserDetails}
            blogathon_id={BLOCKATHON_ID}
            hackathon_id={HACKATHON_ID}
          />
          <DetailsStep
            userDetails={userDetails}
            eventId={HACKATHON_ID}
            step={currentStep}
          />
        </div>
      </div>
    </section>
  );
};

const EmailStep = ({
  step,
  setStep,
  setUserDetails,
  blogathon_id,
  hackathon_id,
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Check if user is already registered as a hacker
    try {
      const { data } = await customAxios
        .unprotected()
        .get(API_ROUTES.hackers.get + hackathon_id + "/" + email);
      Swal.fire({
        icon: "info",
        text: "You already registered for the hackerthon. Please click the button below to login",
        confirmButtonText: "Continue",
      }).then((result) => {
        if (result.isConfirmed) navigate("/blockathon/hackathon/login");
      });
      console.table({ data });
      setLoading(false);
      return;
    } catch (error) {
      console.log("hacker -> error ==> ", error);
      if (error.status !== 400) {
        Swal.fire({
          icon: "error",
          text:
            error?.response?.data?.error ||
            error?.message ||
            "Something went wrong, Please try again.",
          confirmButtonText: "Close",
        });
        setLoading(false);
        return;
      }
    }

    try {
      console.log("Second try");

      // Get user details - {through the event attendee endpoint so we know if the user is regiatered for the blogathon or not}
      const { data } = await customAxios
        .unprotected()
        .post(API_ROUTES.events.attendee + blogathon_id, { email });

      console.log(data);

      setUserDetails(data?.data);
      setStep(2);
      setLoading(false);
    } catch (error) {
      console.log(error);

      // If status is 404, move to step 2
      if (error.status === 404) {
        console.log(error?.response?.data?.error);
        Swal.fire({
          icon: "error",
          text: "Please register for the confrence phase of the event first.",
        });
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [samePassword, setSamePassword] = useState(true);

  const [registrationDetails, setRegisterationDetails] = useState({
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  // Prefill and lock certain inputs - Will happen from url.
  useEffect(() => {
    if (userDetails?.user?.email) {
      setRegisterationDetails((prev) => {
        return {
          ...prev,
          email: userDetails?.user?.email,
        };
      });
    }
  }, [userDetails?.user?.email]);

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
        text: "Please fill all fields",
      });
      setLoading(false);
      return;
    }

    try {
      // Register user for event
      const { data } = await customAxios
        .unprotected()
        .post(API_ROUTES.hackers.create + eventId, registrationDetails);
      console.log(data);

      ReactSwal.fire({
        showConfirmButton: false,
        html: (
          <div className="flex font-raleway text-black flex-col gap-2 justify-center px-6 py-6">
            <h1 className="text-black font-black mx-auto text-[1.5rem]">
              <b>Successful Registration</b>
            </h1>
            <div className="text-center text-[0.875rem]">
              <span>
                You have successfully registered for the Hackathon phase of
                blockathon.
              </span>{" "}
              <span>
                Confirmation email has been sent to {registrationDetails.email}
              </span>
              <br />
              <span>
                Click the link below to join the Telegram Channel for the
                Hackathon.
              </span>
            </div>
            <div className="flex mx-auto pt-4">
              <img src={mailSent} className="w-36 h-36" alt="Success" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-center pt-4">
              <a
                href="https://t.me/BlockchainUNN/52438"
                target={"_blank"}
                rel="noreferrer"
                className="flex gap-2 justify-center mx-auto p-2 rounded-md bg-blue-300 cusor-pointer text-white"
              >
                <BiLogoTelegram className="my-auto" color="white" />
                <span className="text-[0.875rem] my-auto">
                  Join Us on Telegram
                </span>
              </a>
              <button
                className="rounded-md mx-auto text-[0.875rem] px-4 py-2 bg-green-400 text-white font-medium"
                onClick={() => {
                  Swal.close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        ),
      }).finally(() => navigate("/blockathon/hackathon/login"));
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
      <form
        className="flex w-full flex-col gap-8 max-md:gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full gap-8 max-md:gap-4 max-md:flex-col">
          <Input
            icon={emailSvg}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            value={registrationDetails.email}
            disabled={Boolean(registrationDetails?.email)}
          />
          <SelectInput
            icon={genderSvg}
            name="role"
            extraClasses={""}
            onChange={handleSelect}
            placeholder="Role"
            options={[
              "Frontend Developer",
              "Backend Developer",
              "Smart Contract Developer",
              "Designer",
              "Product Manager",
              "Others",
            ]}
            required
            value={registrationDetails.role}
          />
        </div>
        <div className="flex w-full gap-8 max-md:gap-4 max-md:flex-col">
          <Input
            icon={personSvg}
            name="password"
            onChange={(event) => {
              if (event.target.value === registrationDetails.password) {
                setSamePassword(true);
              } else {
                setSamePassword(false);
              }
              handleChange(event);
            }}
            placeholder="Password"
            required
            value={registrationDetails.password}
          />
          <Input
            icon={personSvg}
            name="confirmPassword"
            onChange={handleChange}
            error={!samePassword}
            placeholder="Confirm Password"
            required
            value={registrationDetails.confirmPassword}
          />
        </div>

        <div className="flex w-full max-sm:pt-2 pt-4 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button text={"Register"} loading={loading} inverse={true} />
        </div>
        <div className="flex w-full">
          <span className="flex mx-auto text-white gap-1 max-sm:text-[0.875rem]">
            Already have an account?{" "}
            <Link
              to={"/blockathon/hackathon/login"}
              className="text-blockathon-green"
            >
              Log In
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default HackathonRegistration;
