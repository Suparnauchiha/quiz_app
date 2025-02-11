//schema

const mongoose= require("mongoose");


// Defining schema for database
const PostSchema = Mongoose.Schema({
    id:{
      type: Number,
      required: true  
    },
    category: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

module.exports = Mongoose.model("Posts",PostSchema);