import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Chains.css";




const LandingPage = () => {
  return (
    <div className="landing-container">
      <section className="hero-section">
        <h1>Crave it? Get it delivered!</h1>
        <p>Delicious food, just a click away.</p>
        <input type="text" placeholder="Craving something delicious? Search here..." className="search-bar" />
        <button className="order-btn">Browse Menu</button>
      </section>

      <section className="categories">
        <h2>Explore by Category</h2>
        <div className="category-list">
          <div className="category-item"><img src="/images/pizza.webp" alt="pizza" /><p>Pizza & Pasta</p></div>
          <div className="category-item"><img src="/images/burger.webp" alt="Burger" /><p>Burgers & Sandwiches</p></div>
          <div className="category-item"><img src="/images/dessert.jpg" alt="Desserts" /><p>Desserts & Beverages</p></div>
          <div className="category-item"><img src="/images/biryani.jpg" alt="Indian" /><p>Indian & Spicy</p></div>
        </div>
      </section>

      <section className="trending">
        <h2>🔥 Trending Now</h2>
        <div className="trending-list">
          <div className="food-item"><img src="/images/trend1.jpg" alt="Trending 1" /><p>Fish Fry</p></div>
          <div className="food-item"><img src="/images/trend2.jpg" alt="Trending 2" /><p>Pulkas</p></div>
          <div className="food-item"><img src="/images/trend3.jpg" alt="Trending 3" /><p>Samosa</p></div>
        </div>
      </section>

      <section className="offers">
        <h2>🎁 Exclusive Deals & Offers</h2>
        <div className="offer-list">
          <div className="offer-item"><p>Flat 50% Off on First Order!</p></div>
          <div className="offer-item"><p>Pizza + Coke for ₹199 Only!</p></div>
          <div className="offer-item"><p>Buy 1 Get 1 Free on Burgers!</p></div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Cravoryzz?</h2>
        <div className="why-list">
          <div className="why-item"><p>🚀 Fastest Delivery</p></div>
          <div className="why-item"><p>🔥 1000+ Happy Customers</p></div>
          <div className="why-item"><p>🍽️ Fresh, Hot & Delicious</p></div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="review-list">
          <div className="review-item"><p>"Best burgers ever! - Rajesh"</p></div>
          <div className="review-item"><p>"Fast delivery & hot pizza! - Priya"</p></div>
          <div className="review-item"><p>"Loved the desserts! - Ankit"</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Satisfy Your Cravings?</h2>
        <Link to="/firmcollections" className="order-btn">Start Your Order</Link>
      </section>
    </div>
  );
};

export default LandingPage;
