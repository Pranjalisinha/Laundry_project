const express = require("express");
const app = express();
const mongoose=require("mongoose")
const cors=require("cors")
const register=require("./routes/Register&Signin")

require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.listen(process.env.PORT || 3001, (err)=>{
    console.log(err) ;
}, ()=>{
    console.log("Server connected succesfully")
   ;
})

mongoose.connect("mongodb://localhost/Laundry",(err)=>{
    if(err){
        console.log("err")
    }else{
        console.log("connected successfully to db")
    }
})

app.use("/",register)