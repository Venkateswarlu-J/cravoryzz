import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>User: {localStorage.getItem("username")}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
