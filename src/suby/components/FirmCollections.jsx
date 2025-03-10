import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterHandler = (category) => {
    setSelectedCategory(category);
  };

  const hotelData = [
    { name: "Paradise Biryani", category: "North-Indian", area: "Lakshmipuram, Guntur", image: "paradise.jpg" },
    { name: "Hotel Siddartha", category: "South-Indian", area: "Arundelpet, Guntur", image: "siddartha.jpg" }
  ];

  return (
    <>
      <h3 align="center">🍽️ Top Restaurants in Guntur - Order Online!</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler("All")} className={selectedCategory === "All" ? "activeButton" : ""}>All</button>
        <button onClick={() => filterHandler("South-Indian")} className={selectedCategory === "South-Indian" ? "activeButton" : ""}>South Indian</button>
        <button onClick={() => filterHandler("North-Indian")} className={selectedCategory === "North-Indian" ? "activeButton" : ""}>North Indian</button>
      </div>
      
      <section className="firmSection">
        {hotelData
          .filter(item => selectedCategory === "All" || item.category === selectedCategory)
          .map((hotel, index) => (
            <Link to={`/products/${hotel.name}`} className="link" key={index}>
              <div className="zoomEffect">
                <div className="firmGroupBox">
                  <div className="firmGroup">
                    <img src={`/images/${hotel.image}`} alt={hotel.name} />
                    <div className="firmOffer">🔥 Best Deals on {hotel.name}</div>
                  </div>
                  <div className="firmDetails">
                    <strong>{hotel.name}</strong>
                    <br />
                    <div className="firmArea">📍 {hotel.area}</div>
                    <div className="firmArea">🍽️ {hotel.category}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
};

export default FirmCollections;
