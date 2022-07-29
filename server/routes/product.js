const express= require("express");
const productModal = require("../Modals/product-modal");
const router = express.Router();

router.post("/create-order",(req,res)=>{
    console.log(req.body);
   

    productModal.create({ 
        userId : req.body.userId,
        order_id :req.body.order_id,
        date_time : req.body.date_time,
        store_Info : JSON.stringify(req.body.store_Info),
       
        status : req.body.status,
        user_Address: req.body.user_Address,
        items : JSON.stringify(req.body.items)
     }).then((data)=>{
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

// router.patch("/OrderStatus", (req,res)=>{
//     const orderStatus = orders.updateOne({
//         userId : req.body.userId,
//         order_id : req.body.order_id,
        
//     },{
//         $set:{
//             status :
//         }
//     }).then(()=>{
//         res.status(200).send()
//     })
// })

module.exports= router;