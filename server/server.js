const express = require("express");
const app = express();

app.listen(process.env.PORT || 3001, (err)=>{
    console.log(err) ;
}, ()=>{
    console.log("Server connected succesfully")
   ;
})