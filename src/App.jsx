import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./suby/pages/LandingPage";
import Login from "./suby/pages/Login"; 
import Register from "./suby/pages/Register";
import Home from "./suby/pages/Home";
import "./App.css";
import TopBar from "./suby/components/TopBar";
import FirmCollections from "./suby/components/FirmCollections";
import ContactUs from "./suby/pages/Contactus";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/firmcollections" element={<FirmCollections />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
