import "./App.css";
import { ThemeProvider } from "./Components/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EventsRegistration from "./Pages/events/EventRegistration";
import Blockathon from "./Pages/events/Blockathon";
import HackathonRegistration from "./Pages/events/HackathonRegistration";
import About from "./Pages/About";
import Community from "./Pages/community";
import HackathonLogin from "./Pages/events/HackathonLogin";

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
              <Route path="/blockathon" element={<Blockathon />} />
              {/* Add more routes as needed */}
              <Route
                path="/blockathon/registration"
                element={<EventsRegistration />}
              />
              <Route
                path="/blockathon/hackathon/registration"
                element={<HackathonRegistration />}
              />
              <Route
                path="/blockathon/hackathon/login"
                element={<HackathonLogin />}
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
