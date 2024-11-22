// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import Navbar from "./components/Navbar";
import Venue1 from "./components/Venue1";
import Venue2 from "./components/Venue2";
import Venue3 from "./components/Venue3";
import Venue4 from "./components/Venue4";
import Venue5 from "./components/Venue5";
import Venue6 from "./components/Venue6";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdashboard" element={<UserDashboard />} /> 
        <Route path="/managerdashboard" element={<ManagerDashboard />} /> 
        <Route path="/venue1" element={<Venue1 />} />
        <Route path="/venue2" element={<Venue2 />} />
        <Route path="/venue3" element={<Venue3 />} />
        <Route path="/venue4" element={<Venue4 />} />
        <Route path="/venue5" element={<Venue5 />} />
        <Route path="/venue6" element={<Venue6 />} />
      </Routes>
    </Router>
  );
};

export default App;
