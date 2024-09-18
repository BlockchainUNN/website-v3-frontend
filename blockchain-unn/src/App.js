import "./App.css";
import { ThemeProvider } from "./Components/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/events";
import EventsDetails from "./Pages/events/EventDetails";
import EventsRegistration from "./Pages/events/EventRegistration";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="App max-w-screen-2xl">
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes as needed */}
              <Route path="events" element={<Events />}>
                <Route path=":eventUid" element={<EventsDetails />}>
                  <Route path="registration" element={<EventsRegistration />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
