import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./suby/pages/LandingPage";
import Login from "./suby/pages/Login"; 
import Register from "./suby/pages/Register";
import "./App.css";
import TopBar from "./suby/components/TopBar";
import FirmCollections from "./suby/components/FirmCollections";
import ContactUs from "./suby/pages/Contactus";
import Cart from "./suby/components/Cart"
import HomeBeforeLogin from "./suby/pages/HomeBeforeLogin";
import { CartProvider } from "./suby/pages/CartContext";
import FoodItems from "./suby/pages/FoodItems";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("user");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
      <TopBar />
      <Routes>
      <Route path="/" element={isLoggedIn?<LandingPage/>:<HomeBeforeLogin />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/firmcollections" element={<FirmCollections />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products/:hotelName" element={<FoodItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chains" element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
