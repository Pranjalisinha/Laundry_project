const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   userEmail : {
    type: String,
    require: true
   },
   orderId : {
    type: String,
    require: true
   },
   orderDate_time : {
    type: String,
    require: true
   },
   storeLocation : {
    type: String,
    require: true
   },
    storeAddress : {
    type: String,
    require: true
   },
   storePhoneNo : {
    type: Number,
    require: true
   },
   orderDetail : {
    type: String,
    require: true
   },
   subTotal : {
    type: Number,
    require: true
   },
   packingCharges : {
    type: Number,
    require: true
   },
   totalAmount : {
    type: Number,
    require: true
   }
})

const orderModal = mongoose.model("product", orderSchema);
module.exports = orderModal;