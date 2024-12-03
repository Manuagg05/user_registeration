import React,{useState} from "react";
import axios from "axios"

const signUp = () => {

  const [formData ,setFormData]=useState({
    userName:"",
    email:"",
    choosePassword:"",
    password:""
  })

  const handleChange=(e)=>{
   const { name, value } = e.target;
   setFormData((prevFormData) => ({
     ...prevFormData, 
     [name]: value, 
   }));
   
    
  }


const handleSubmit = ()=>{

  




}

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
      </div>
    </>
  ); 
};

export default signUp;
