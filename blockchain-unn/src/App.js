import "./App.css";
import { ThemeProvider } from "./Components/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EventsRegistration from "./Pages/events/EventRegistration";
import Blockathon from "./Pages/events/Blockathon";
import HackathonRegistration from "./Pages/events/HackathonRegistration";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="App max-w-screen-2xl">
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
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
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
