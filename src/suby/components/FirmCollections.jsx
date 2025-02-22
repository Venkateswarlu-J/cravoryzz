import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("Firm data not fetched");
      console.error("Firm data not fetched", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (category) => {
    setSelectedCategory(category);
  };

  const hotelData = [
    { name: "Paradise Biryani", category: "North-Indian", area: "Lakshmipuram, Guntur", image: "paradise.jpg" },
    { name: "Hotel Siddartha", category: "South-Indian", area: "Arundelpet, Guntur", image: "siddartha.jpg" },
    { name: "Nagarjuna Restaurant", category: "South-Indian", area: "Brodipet, Guntur", image: "nagarjuna.jpg" },
    { name: "Ramaiah Mess", category: "South-Indian", area: "Chandramouli Nagar, Guntur", image: "ramaiah.jpg" },
    { name: "Barbeque Nation", category: "BBQ & Grills", area: "Ring Road, Guntur", image: "barbeque.jpg" },
    { name: "Minerva Grand", category: "Fine Dining", area: "Old Guntur, Guntur", image: "minerva.jpg" },
    { name: "Taj Gateway", category: "Luxury Dining", area: "Amaravathi Road, Guntur", image: "taj.jpg" },
    { name: "Sweet Magic", category: "Desserts", area: "Patnam Bazar, Guntur", image: "sweetmagic.jpg" },
    { name: "Abhiruchi", category: "Andhra Meals", area: "Brundavan Gardens, Guntur", image: "abhiruchi1.jpg" },
    { name: "KFC Guntur", category: "Fast Food", area: "Lakshmipuram Main Road, Guntur", image: "kfc.jpg" }
  ];

  return (
    <>
      <h3 align="center">🍽️ Top Restaurants in Guntur - Order Online!</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler("All")} className={selectedCategory === "All" ? "activeButton" : ""}>All</button>
        <button onClick={() => filterHandler("South-Indian")} className={selectedCategory === "South-Indian" ? "activeButton" : ""}>South Indian</button>
        <button onClick={() => filterHandler("North-Indian")} className={selectedCategory === "North-Indian" ? "activeButton" : ""}>North Indian</button>
        <button onClick={() => filterHandler("BBQ & Grills")} className={selectedCategory === "BBQ & Grills" ? "activeButton" : ""}>BBQ & Grills</button>
        <button onClick={() => filterHandler("Fine Dining")} className={selectedCategory === "Fine Dining" ? "activeButton" : ""}>Fine Dining</button>
        <button onClick={() => filterHandler("Luxury Dining")} className={selectedCategory === "Luxury Dining" ? "activeButton" : ""}>Luxury Dining</button>
        <button onClick={() => filterHandler("Desserts")} className={selectedCategory === "Desserts" ? "activeButton" : ""}>Desserts</button>
        <button onClick={() => filterHandler("Andhra Meals")} className={selectedCategory === "Andhra Meals" ? "activeButton" : ""}>Andhra Meals</button>
        <button onClick={() => filterHandler("Fast Food")} className={selectedCategory === "Fast Food" ? "activeButton" : ""}>Fast Food</button>
      </div>
      
      <section className="firmSection">
        {hotelData
          .filter(item => selectedCategory === "All" || item.category === selectedCategory)
          .map((hotel, index) => (
            <Link to={`/products/${index}/${hotel.name}`} className="link" key={index}>
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
