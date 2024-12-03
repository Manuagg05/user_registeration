import bcrypt from "bcryptjs"
import User from "../models/User.js"

export const loginUser = async (req,res)=>{

    const {email,password}=req.body
    try {
      
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }

      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

     
      res.status(200).json({ message: "Login successful", user: user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    }
}