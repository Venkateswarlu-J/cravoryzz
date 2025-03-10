import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) { // Check if userId exists
      setUser(storedUser);
      fetchCart(storedUser.id); // Fetch cart only if userId is valid
    }
  }, []);
  
  const fetchCart = async (userId) => {
    if (!userId) {
      console.error('User ID is not defined, cannot fetch the cart');
      return; // Exit if userId is not defined
    }
    try {
      const response = await axios.get(`http://localhost:3000/cart/${userId}`);
      setCart(response.data.cart || []); // Update cart state
    } catch (error) {
      console.error("Error fetching cart", error);
      setCart([]);
    }
  };

  const addToCart = async (item) => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const updatedCart = [...cart, { ...item, quantity: 1 }];
    setCart(updatedCart);

    try {
      await axios.post("http://localhost:3000/update-cart", { userId: user.id, productId: item._id, action: "add" });
      fetchCart(user.id);
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, user }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};