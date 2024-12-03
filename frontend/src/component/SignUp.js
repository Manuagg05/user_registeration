import React,{useState} from "react";
import axios from "axios"

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
    <>
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Choose Password"
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
      
      </div>
    </>
  );
};

export default SignUp;
