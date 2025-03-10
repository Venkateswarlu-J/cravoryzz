import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userData = { name: username, email: email };
      await axios.post("http://localhost:3000/register", { username, email, password });
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggedIn(true);
      window.dispatchEvent(new Event("storage"));
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration success.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Register;