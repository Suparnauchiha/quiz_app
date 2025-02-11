const { MongoParseError } = require("mongodb");
const mongoose= require("mongoose");
require("dotenv").config() 
const connectdb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected..")
    }
   
    catch(error){
        console.error("connection error",error.message);
        process.exit(1);
    }
};

module.exports= connectdb;

