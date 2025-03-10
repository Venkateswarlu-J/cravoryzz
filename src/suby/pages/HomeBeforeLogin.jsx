import React from "react";
import { Link } from "react-router-dom";

const HomeBeforeLogin = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to CravoryZZ</h1>
        <p>Your cravings, delivered instantly!</p>
        <Link to="/firmcollections" className="explore-btn">Explore Restaurants</Link>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <img src="/images/fast-delivery.png" alt="Fast Delivery" />
          <h3>Super Fast Delivery</h3>
          <p>Get your food in no time with our rapid delivery system.</p>
        </div>
        <div className="feature-card">
          <img src="/images/best-quality.png" alt="Best Quality" />
          <h3>Best Quality Food</h3>
          <p>Fresh and delicious meals from top-rated restaurants.</p>
        </div>
        <div className="feature-card">
          <img src="/images/offers.png" alt="Exclusive Offers" />
          <h3>Exciting Offers</h3>
          <p>Enjoy amazing discounts on your favorite meals.</p>
        </div>
      </div>

      <div className="login-register-section">
        <h2>Get Started Now</h2>
      </div>
    </div>
  );
};

export default HomeBeforeLogin;
