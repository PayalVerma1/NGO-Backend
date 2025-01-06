const express=require("express");
const registerRoute = require("./Routes/register");
const User=require("./Routes/blood_portal");
const bodyParser = require("body-parser");
const certificateRoutes = require("./Routes/certificate.js");
const connectdb = require("./utilis/db");

const cors = require("cors");
const app=express();
const PORT=8000;
connectdb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/certificate",certificateRoutes);
app.use("/api", registerRoute);
app.use("/api/blood",User );

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
 