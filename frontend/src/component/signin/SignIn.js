import React ,{useState}from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./signin.css"

const SignIn = () => {

  const navigate = useNavigate()

const [formData,setFormData] = useState({
  email:"",
  password:""
})

const [error,setError]=useState(null)
const [success,setSuccess]=useState(null)


const handleChange =(e)=>{
 const { name, value } = e.target;
 setFormData((prevFormData) => ({
   ...prevFormData,
   [name]: value,
 }));
}
const handleSubmit = async(e)=>{
   e.preventDefault();


   try {
     const response = await axios.post(
       "http://localhost:8080/api/user/login",
       {
         userName: formData.userName,
         email: formData.email,
         password: formData.password,
       }
     );

     setSuccess(response.data.message);
     setError(null);
     navigate("/userProfile")
   } catch (err) {
     setError(err.response?.data?.message || "Something went wrong");
     setSuccess(null);
   }

}


  return (
    <div className="main-container">
      <div className="left-div">
        <img src="Fetch Dreams.png"/>
      </div>
      <div className="right-div">
        <form onSubmit={handleSubmit} className="form-div">
          <h1 className="login-heading">Login In</h1>
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
            placeholder="enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login In</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      </div>
    </div>
  );
};

export default SignIn;
