const express = require("express");
const mongoose = require("mongoose");
const productModal = require("./Modals/product-modal");
const app = express();

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

app.get("/",(req,res)=>{
    res.status(200).send("Laundry app")
},(err)=>{
    console.log(err)
})

app.post("/create-order",(req,res)=>{
    console.log(req.body);
    //res.send("post working")

    productModal.create({ 
        shirt : req.body.shirt,
        t_shirt :req.body.t_shirt,
        trouser : req.body.trouser,
        jeans : req.body.jeans,
        boxer : req.body.boxer,
        jogger: req.body.jogger,
        other : req.body. other
    } ).then((data)=>{
        res.status(200).send( data)
            
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get ("/list",(req,res)=>{

})