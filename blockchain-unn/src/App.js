import "./App.css";
import { ThemeProvider } from "./Components/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy } from "react";

import Home from "./Pages/Home";
import EventsRegistration from "./Pages/events/EventRegistration";
import Blockathon from "./Pages/events/Blockathon";
import HackathonRegistration from "./Pages/events/HackathonRegistration";
import About from "./Pages/About";
import Community from "./Pages/community";
import HackathonLogin from "./Pages/events/HackathonLogin";
import HackathonDashboard from "./Pages/events/HackathonDashboard";
import Bootcamp from "./Pages/bootcamp";
import ForgotPassword from "./Pages/events/forgetPassword";
import DevBootcampRegistration from "./Pages/bootcamps/devRegisteration";
import ContentBootcampRegisteration from "./Pages/bootcamps/contentRegisteration";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="App max-w-screen-2xl">
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
              <Route path="/event" element={<Blockathon />} />
              <Route path="/bootcamp" element={<Bootcamp />} />
              <Route
                path="/bootcamp/dev/registeration"
                element={<DevBootcampRegistration />}
              />
              <Route
                path="/bootcamp/content/registeration"
                element={<ContentBootcampRegisteration />}
              />
              {/* Add more routes as needed */}
              <Route
                path="/event/registration"
                element={<EventsRegistration />}
              />
              <Route
                path="/event/hackathon/registration"
                element={<HackathonRegistration />}
              />
              <Route
                path="/event/hackathon/login"
                element={<HackathonLogin />}
              />
              <Route
                path="/event/hackathon/reset_password"
                element={<ForgotPassword />}
              />
              <Route path="/event/hackathon" element={<HackathonDashboard />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
