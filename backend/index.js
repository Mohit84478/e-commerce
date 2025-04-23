import express from "express"
import cors from "cors"
import connectdatabase from "./config/database.js";
import dotenv from "dotenv"
import userrouter from "./routes/userroutes.js";
import productrouter from "./routes/productroute.js";
import connectcloud from "./config/cloudinary.js";
 
dotenv.config({});
const app=express()
 const port= process.env.port ||8000;




 app.use(express.json());
app.use(cors())

// api
app.use('/api/user',userrouter)
app.use('/api/product',productrouter)


 app.get('/',(req,res)=>{
    res.send("api working")

 })
app.listen(port,()=>{
    connectdatabase();
    connectcloud()
    console.log(`server is runniing ${port}`);
    
})