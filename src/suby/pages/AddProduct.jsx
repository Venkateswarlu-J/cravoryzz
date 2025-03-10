import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const AddProduct = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser?.role !== "admin") {
        alert("Access Denied!");
        window.location.href = "/"; 
      } else {
        setUser(storedUser);
      }
    }, []);
  
    return user ? <YourAddProductForm /> : null;
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/add-product", product);
      alert("Product added successfully!");
      setProduct({ name: "", price: "", description: "", imageUrl: "" }); // Clear form
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={product.imageUrl} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
