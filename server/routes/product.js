const express= require("express");
const productModal = require("../Modals/product-modal");
const router = express.Router();

router.post("/create-order",(req,res)=>{
    console.log(req.body);
    //res.send("post working")

    productModal.create({ 
        userId : req.body.userId,
        order_id :req.body.order_id,
        date_time : req.body.date_time,
        store_Info : req.body.store_Info,
        status : req.body.status,
        items : req.body. items
    } ).then((data)=>{
        res.status(200).send( data)
            
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get("/",(req,res)=>{
    productModal.find().then((data)=>{
        if(data){
            res.status(200).send(data)
        }
    }).catch((err)=>{
        res.status(400).send(err)
    })
});
module.exports= router;