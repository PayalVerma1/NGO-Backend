const express=require("express");
const user_1=require("../models/register_user.js");
const Router=express.Router();
Router.post("/NGO",async(req,res)=>{
try {
    const {name,email,phoneNumber,altPhoneNumber,currentAddress,permanentAddress,branch,year,bloodGroup,college,project,workSpan,skills,suggestions}=req.body;
    console.log(req.body);
    if (!name || !email || !phoneNumber || !altPhoneNumber || !currentAddress || !permanentAddress || !branch || !year || !bloodGroup || !college || !project || !workSpan || !skills || !suggestions) {
        console.error("Validation error: Missing required fields:", req.body);
        return res.status(400).json({ message: 'All required fields must be filled' });
      }
      // Create and save the market data
      const result = await user_1.create({
        name,
        email,
        phoneNumber,
        altPhoneNumber,
        currentAddress,
        permanentAddress,
        branch,
        year,
        bloodGroup,
        college,
        project,
        workSpan,
        skills,
        suggestions,
      });
      console.log(result);
      // Send success response
      res.status(201).json({
        message: "User created successfully",
        data: result,
       
      });
    } catch (error) {
      console.error("Error creating user:", error);
  
      // Send error response
      res.status(500).json({
        message: "Failed to user",
        error: error.message,
      });
    }
  });
  module.exports=Router;
  