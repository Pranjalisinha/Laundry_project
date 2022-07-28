const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productController = require("./routes/product");
//console.log(productController)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3001,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});
mongoose.connect("mongodb://localhost:27017/laundry",(data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});

app.use("/product",productController);

app.get("/",(req,res)=>{
    res.status(200).send("Laundry app")
},(err)=>{
    console.log(err)
})

