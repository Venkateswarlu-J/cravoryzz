import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    const updateUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);



  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    //setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>CravoryZZ</h2>
        </Link>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Tasty food is just a search away..." />
      </div>

      <div className="userAuth">
        <Link to="/firmcollections" className="link">Restaurants</Link>

        {user ? (
          <>
            <Link to="/cart" className="link">Cart</Link>
            <Link to="/contactus" className="link">Contact Us</Link>
            <span className="userName">Welcome, {user.name}!</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="authButton">Login</Link>
            <span> / </span>
            <Link to="/register" className="authButton">Sign Up</Link>
          </>
        )}
      </div>
    </section>
  );
};

export default TopBar;
