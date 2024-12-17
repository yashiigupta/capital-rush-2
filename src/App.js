import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Signup from './components/Signup';

function App() {
  return (
    <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center bg-[#d6c2b4]">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

