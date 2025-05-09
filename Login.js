import React, { useState } from "react";
import "./Login.css";
import collegeBg from "../assets/college-bg.jpg"; // Import the background image



const Login = ({ setUserRole }) => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username && password && role) {
      setUserRole(role);
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${collegeBg})` }}>
      <div className="login-box">
        <h2 className="login-title">CampusSphere</h2>
        
        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Enter your username" 
            className="input-field" 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="input-field" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Select Role</label>
          <select className="input-field" onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Faculty">Faculty</option>
            <option value="HOD">HOD</option>
            <option value="Exam">Exam Department</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;