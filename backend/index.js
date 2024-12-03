import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 5001




app.get("/data" ,(req,res)=>{
    res.send("hey pong")
})

app.listen(PORT,()=>{




    console.log(`running on port ${PORT}`)

})