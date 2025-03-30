const express = require("express");
const user = require("../models/user.js");
const Router = express.Router();
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
module.exports = Router;
