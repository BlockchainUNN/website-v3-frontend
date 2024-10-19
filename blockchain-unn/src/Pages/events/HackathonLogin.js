import { useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import previouSvg from "../../assets/icons/previousArrow.svg";
import bg_image from "../../assets/blogathon_bg.png";
import { Input } from "../../Components/Input";
import emailSvg from "../../assets/icons/email.svg";
import { Button } from "../../Components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import passwordSvg from "../../assets/icons/password.svg";
import { setToken } from "../../utils/localStorage";
import { updateHackerDetails } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";

const HackathonLogin = () => {
  const { hackathon_id } = useSelector((state) => state.app);
  const HACKATHON_ID = hackathon_id;
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const Header = () => (
    <h1 className="flex justify-center flex-col text-white font-black mx-auto max-sm-420:text-[1rem] max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[2rem] text-[2.75rem] text-nowrap gap-1.5 font-raleway">
      <span className="flex gap-2 mx-auto">
        Log <span className="text-blockathon-green">In</span>
      </span>
      <span className="text-white font-normal mx-auto max-sm-420:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] text-nowrap font-raleway">
        Succefully registered for the hackathon?
      </span>
      <span className="text-white font-normal mx-auto max-sm-420:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] text-nowrap font-raleway">
        Login Below to join or form a team
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
              navigate(-1);
            }}
          >
            <img src={previouSvg} alt="Go Back" className="h-6 max-sm:h-4" />
          </button>
        </div>
        <div className="flex mx-auto w-full px-16 max-md:px-8 max-sm:px-0 my-auto gap-12 max-sm:gap-6 flex-col max-lg:w-full">
          <Header />
          <LoginForm
            setUserDetails={setUserDetails}
            hackathon_id={HACKATHON_ID}
          />
        </div>
      </div>
    </section>
  );
};

const LoginForm = ({ setUserDetails, hackathon_id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get user details - {through the event attendee endpoint so we know if the user is regiatered for the blogathon or not}
      setLoading(true);
      const { data } = await customAxios
        .unprotected()
        .post(API_ROUTES.hackers.login + hackathon_id, { email, password });

      // Store login data locally And user data in redux state
      setToken(data?.data?.tokens);
      dispatch(updateHackerDetails(data?.data?.userDetails));
      navigate("/event/hackathon");
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
  };

  return (
    <div className={"flex  w-full flex-col "}>
      <form className="flex flex-col w-full gap-12" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-8">
          <Input
            icon={emailSvg}
            type={"text"}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
          <Input
            icon={passwordSvg}
            type={"password"}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <div className="flex w-full max-sm:pt-2 pt-4 drop-shadow-2xl shadow-black shadow-2xl mx-auto">
          <Button text={"Log In"} loading={loading} inverse={true} />
        </div>
        <div className="flex w-full">
          <span className="flex mx-auto text-white gap-1 max-sm:text-[0.875rem]">
            Don't have an account?{" "}
            <Link
              to={"/event/hackathon/registration"}
              className="text-blockathon-green"
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default HackathonLogin;
