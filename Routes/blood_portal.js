const express = require("express");
const user = require("../models/user.js");
const Router = express.Router();

// POST route for creating a user
Router.post("/blood_portal", async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bloodGroup, dob, address } = req.body;
    console.log(req.body);
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !bloodGroup ||
      !dob ||
      !address
    ) {
      console.error("Validation error: Missing required fields:", req.body);
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }
    const result = await user.create({
      fullName,
      email,
      phoneNumber,
      bloodGroup,
      dob,
      address,
    });
    console.log(result);

    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Failed to user",
      error: error.message,
    });
  }
});

// GET route for /blood
Router.get("/", async (req, res) => {
  try {
    const users = await user.find(); // Fetch all users from the database
    res.status(200).json({
      message: "Blood portal data fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching blood portal data:", error);
    res.status(500).json({
      message: "Failed to fetch blood portal data",
      error: error.message,
    });
  }
});

module.exports = Router;