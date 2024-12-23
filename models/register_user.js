const mongoose=require("mongoose");
const { Schema }=mongoose;
const register=new Schema({
    name:{
        type:String,
        require:true,
        trim: true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    } ,
    phoneNumber:{
        type:String,
        require:true,
        trim: true,
        match: /^[0-9]{10}$/
    } ,
    altPhoneNumber:{
        type:String,
        require:true,
        trim: true,
    },
    currentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
        trim: true,
    },
    branch: {
        type: String,
       required:true,
       trim: true,
    },
    year: {
        type: Date,
        default: Date.now, 
    },
    bloodGroup: {
        type: String,
        required:true,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    college: {
        type: String,
        required:true,
        trim: true,
    },
    project: {
        type: String,
       required:true,
       trim: true,
    },
    workSpan: {
        type: String,
        required:true,
        trim: true,
    },
    skills: {
        type: String,
        required:true,
        trim: true,
    },
    suggestions: {
        type: String,
        required:true,
        trim: true,
        default: Date.now, 
    },
   
});
const user_1 = mongoose.model("RegisterUser",register);
module.exports = user_1;
