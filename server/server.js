const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ordercontroller = require("./Router/order_router.js");

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(process.env.PORT || 3001, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Server connected succesfully")
    }
})
mongoose.connect("mongodb://localhost/order", (data)=>{
    console.log("Database connected");
})

app.use("/order", ordercontroller);