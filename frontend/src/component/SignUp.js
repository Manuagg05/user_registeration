import React,{useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import "./signup.css" 

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    choosePassword: "",
    password: "",
  });

  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (formData.choosePassword !== formData.password) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        {
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        }
      );

      setSuccess(response.data.message);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setSuccess(null);
    }
  };

  return (
    <div className="main-container">
      <div className="container-1">
        <img src="/Fetch Dreams.png" />

      </div>
      <div className="container-2">
        <form onSubmit={handleSubmit} className="form-div">
          <h1>Register</h1>

          <input
            type="text"
            placeholder="Enter Your Name"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Choose A Strong Password"
            name="choosePassword"
            value={formData.choosePassword}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register Yourself</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {success && <p style={{ color: "green" }}>{success}</p>}{" "}
        <h3>
          Already a user <Link to="/signin">Login in</Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
