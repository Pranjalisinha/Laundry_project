const express = require("express");
const app = express();

app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server connected succesfully");
}, (err)=>{
    console,log(err);
})