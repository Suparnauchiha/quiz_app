
const express= require("express")
const dotenv= require("dotenv")
const cors= require("cors")
const bodyParser= require("body-parser")
const connectdb= require('./config/db')

dotenv.config();
connectdb();
//epress.js is declared in app
const app= express();
app.use(cors()) //middleware as we are configuring
app.use(bodyParser.json())
app.use('/api/products',require("./routes/productRoutes"))// declare api path

//api is running or not?
app.get("/",(req,res)=>{
    res.send("e-commerce is running..")
})

const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("serber is running at 5000....")
})