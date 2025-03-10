import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
