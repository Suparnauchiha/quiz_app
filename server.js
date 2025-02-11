
const express= require("express")
const dotenv= require("dotenv")
const cors= require("cors")
const bodyParser= require("body-parser")
const connectdb= require('./config/db')

dotenv.config();
connectdb();

const app= express();
app.use(cors()) 
app.use(bodyParser.json())
app.use('/api/quizs',require("./routes/questionRoutes"))// declare api path
app.use('/api/users',require("./routes/userRoutes"))

app.get("/",(req,res)=>{
    res.send("quiz app is running..")
})

const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is running at 5000....")
})