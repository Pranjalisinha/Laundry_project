const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ordercontroller = require("./Router/order_router.js");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
require("dotenv").config()

app.listen(process.env.PORT || 3001, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Server connected succesfully")
    }
})

const url = "mongodb+srv://Sakshi09:test123@instaclone.gwk4cly.mongodb.net/laundry?retryWrites=true&w=majority";
mongoose.connect(url, (data)=>{
    console.log("Database connected");
})

app.use("/order", ordercontroller);