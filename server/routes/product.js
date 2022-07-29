const express= require("express");
const productModal = require("../Modals/product-modal");
const router = express.Router();

router.post("/create-order",(req,res)=>{
    console.log(req.body);
    //res.send("post working")
    const timeStamp = new Date().toString();
    console.log(timeStamp);
    const storeInfo = JSON.stringify(store_Info)
    console.log(storeInfo)

    productModal.create({ 
        userId : req.body.userId,
        order_id :req.body.order_id,
        date_time : timeStamp,
        store_Info :req.body.store_Info,
        // const storeInfo = JSON.stringify(store_Info)
        // console.log(storeInfo),
        status : req.body.status,
        user_adress: req.body.user_adress,
        items : req.body. items
     },
        //const storeInfo = JSON.stringify(store_Info),    
    ).then((data)=>{
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