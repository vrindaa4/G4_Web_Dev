//require or import all the module here only 
const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');

//variable declaration here only 
const PORT = process.env.PORT ;

async function dbConnect(){
    await mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB CONNECTED");
});

}

//set instances here
const app = express();

dbConnect().then(()=>{
app.listen(PORT,()=>{
    console.log("Server is running on port" , PORT);
});
});
