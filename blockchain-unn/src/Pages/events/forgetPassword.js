import { useEffect, useState } from "react";
import { API_ROUTES, customAxios } from "../../api.routes";
import bg_image from "../../assets/blogathon_bg.png";
import { Button } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useQuery from "../../hooks/query";

const ForgotPassword = () => {
  const query = useQuery();
  const code = query.get("code");
  const userEmail = query.get("email");

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 for getting email, 2 for setting password

  useEffect(() => {
    if (!code && !userEmail) {
      setStep(1);
    } else {
      setStep(2);
    }
  }, [code, userEmail]);

  // Handle input change
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get user details - {through the event attendee endpoint so we know if the user is regiatered for the blogathon or not}
      setLoading(true);

      // Initial request to send mail.
      if (step === 1) {
        await customAxios
          .unprotected()
          .post(API_ROUTES.hackers.forgotpassword, { email });

        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "We sent you an email with a link to reset your password.",
          confirmButtonText: "Okay",
        }).finally(() => navigate("/event"));
      }

      // Password setting phase
      if (step === 2) {
        if (password !== confirmPassword) {
          Swal.fire({
            icon: "error",
            text: "Passwords are not the same, Please ensure Password and Confirm Password are the same.",
          });
          return;
        }

        await customAxios
          .unprotected()
          .post(API_ROUTES.hackers.forgotpasswordCallback, {
            email: userEmail,
            code,
            newPassword: password,
          });

        setLoading(false);
        Swal.fire({
          icon: "success",
          text: "Your password has been updated. Proceed to log in.",
          confirmButtonText: "Login",
        }).finally(() => navigate("/event/hackathon/login"));
      }
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

  console.log({ email, password, confirmPassword, code, userEmail });

  return (
    <section
      style={{ backgroundImage: `url(${bg_image})` }}
      className="relative flex items-center justify-center w-screen h-screen bg-cover bg-no-repeat bg-scroll"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-white font-black mx-auto text-[2.75rem] max-lg:text-[2rem] max-md:text-[1.5rem] max-sm:text-[1.2rem] max-sm-420:text-[1rem] gap-1.5 font-raleway">
          <span className="block">Enter your email to reset your password</span>
          <span>(Hackathon)</span>
        </h1>

        {step === 1 ? (
          <>
            {/* Email Input */}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={handleChange}
                className="mt-6 p-3 w-full max-w-full bg-white bg-opacity-80 rounded-md shadow-md text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
              />
              <span style={{ width: "20%" }}>
                {" "}
                <Button text={"Continue"} loading={loading} inverse={true} />
              </span>
            </form>
          </>
        ) : (
          <>
            {/* Password Inputs */}
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                onChange={handleChange}
                className="mt-6 p-3 w-full max-w-full bg-white bg-opacity-80 rounded-md shadow-md text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
              />
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
                onChange={handleChange}
                className="mt-6 p-3 w-full max-w-full bg-white bg-opacity-80 rounded-md shadow-md text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
              />
              <span style={{ width: "20%" }}>
                {" "}
                <Button
                  text={"Change Password"}
                  loading={loading}
                  inverse={true}
                />
              </span>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default ForgotPassword;
