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
//"mongodb+srv://Sakshi09:test123@instaclone.gwk4cly.mongodb.net/instaclone?retryWrites=true&w=majority"
//"mongodb://localhost/Laundry"

mongoose.connect("mongodb+srv://Sakshi09:test123@instaclone.gwk4cly.mongodb.net/laundry?retryWrites=true&w=majority",(err)=>{
    if(err){
        console.log("err")
    }else{
        console.log("connected successfully to db")
    }
})

app.use("/",register)