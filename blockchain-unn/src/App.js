import './App.css';
import { ThemeProvider } from './Components/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
