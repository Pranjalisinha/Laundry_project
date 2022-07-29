const express= require("express");
const productModal = require("../Modals/product-modal");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/", (req, res)=> {
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
        res.status(200).send(user)
    } catch(err) {
        res.status(403).send("Unauthorize user", err)
    }    
});

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

router.get("/user",(req,res)=>{
    productModal.find().then((data)=>{
        if(data.length){
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