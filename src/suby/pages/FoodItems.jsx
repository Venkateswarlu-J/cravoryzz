import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import the Cart Context

const FoodItems = () => {
  const { hotelName } = useParams(); // Get hotel name from URL
  const { addToCart } = useCart(); // Access cart functions

  const foodItemsData = {
    "Paradise Biryani": [
      { _id: 1, name: "Hyderabadi Biryani", price: 250, image: "biryani.jpg" },
      { _id: 2, name: "Tandoori Chicken", price: 300, image: "tandoori.jpeg" }
    ],
    "Hotel Siddartha": [
      { _id: 3, name: "Masala Dosa", price: 120, image: "dosa.jpeg" },
      { _id: 4, name: "Idli Sambar", price: 80, image: "idli.jpeg" }
    ]
  };

  const handleMsg = (item) => {
    alert(`Successfully added!! ${item.name} into the cart`);
  }
  const foodItems = foodItemsData[hotelName] || [];

  return (
    <div>
      <h2>{hotelName} Menu</h2>
      <div className="food-items-container">
        {foodItems.length === 0 ? (
          <p>No items available for this restaurant.</p>
        ) : (
          foodItems.map((item) => (
            <div key={item.id || item.name} className="food-item">
              <img src={`/images/${item.image}`} alt={item.name} />
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => {addToCart(item);handleMsg(item);}}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodItems;
