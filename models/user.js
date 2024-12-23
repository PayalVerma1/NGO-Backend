const mongoose=require("mongoose");
const { Schema }=mongoose;
const blood_portal=new Schema({
    fullName:{
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
    bloodGroup:{
        type:String,
        require:true,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now, 
    },
});
const user=mongoose.model("User",blood_portal);
module.exports=user;