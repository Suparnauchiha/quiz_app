const express = require("express");
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const router = express.Router();



router.get("/", getAllUsers);           // Get all users
router.get("/:id", getUserById);        // Get a user by ID
router.post("/", createUser);           // Create a new user
router.put("/:id", updateUser);      // Update user details
router.delete("/:id", deleteUser);     // Delete a user

module.exports = router;