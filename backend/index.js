import express from "express";
import userRoutes from "./Routes/userRoutes.js"
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./models/db.js";
const app = express();
dotenv.config();
connectDB();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/user/",userRoutes)




app.use(express.json());
const PORT = process.env.PORT || 5002;




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
