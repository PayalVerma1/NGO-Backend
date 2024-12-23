const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.URI, {
         
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};
module.exports=connectdb;