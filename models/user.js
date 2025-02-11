const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  score: { type: Number, default: 0 }, // This can store overall score 
  createdAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model("User", userSchema);