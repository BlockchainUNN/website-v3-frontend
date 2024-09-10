import './App.css';
import { ThemeProvider } from './Components/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className='flex flex-col items-center'>
    <div className="App max-w-screen-2xl">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
    </div>
  );
}

export default App;
