import { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "../pages/CartContext"; // Import the Cart Context

function Cart() {
  
  const { cart, setCart } = useCart(); // Use cart state from context

  const handleRemove = async(id,name) => {

    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    alert(`${name} is removed!`) // Use functional update
  };
  const totalAmount = cart?.reduce((total, item) => total + item.price * item.quantity, 0)||0;
  const handleQuantityChange = (id, quantity) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
            item._id === id ? { ...item, quantity: quantity } : item
        )
    );
};

const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);

const applyCoupon = (coupon) => {
    if (coupon === "SAVE10") {
        setDiscount(0.1);
        alert("Coupon Applied! 10% Discount.");
        const totalAmount = cart?.reduce((total) => total -total*0.1, 0)||0;
    } else {
        alert("Invalid Coupon");
    }
};

  const discountedTotal = totalAmount - totalAmount * discount;

  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      {!cart||cart.length === 0 ? (
        <p>Your cart is empty.</p> // Show empty cart message if no items
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item._id||item.name} className="cart-item">
                <span>{item.name}</span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                />
                <span>${item.price * item.quantity}</span>
                <button onClick={() => handleRemove(item._id,item.name)}>Remove</button>
                <button onClick={() => alert("Proceed to payment")}>Buy Now</button><br></br>
                <button on onClick={(e)=>applyCoupon("SAVE10")}>Apply coupon</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
