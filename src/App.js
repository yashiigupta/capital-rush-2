import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center bg-[#d6c2b4]">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route path="/homepage" element={isLoggedIn ? (<Homepage onLogout={handleLogout} />) : (<Navigate to="/login" />)} 
          />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
