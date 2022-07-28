const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        shirt:{
            quantity: Number,
            wash_type: Array,
            price: Number 
        },
        t_shirt:{
            quantity: Number,
            wash_type: Array,
            price: Number
        },
        trouser:{
            quantity: Number,
            wash_type: Array,
            price: Number
        },
        jeans:{
            quantity: Number,
            wash_type: Array,
            price: Number
        },
        boxer:{
            quantity: Number,
            wash_type: Array,
            price: Number
        },
        jogger:{
            quantity: Number,
            wash_type: Array,
            price: Number
        },
        other:{
            quantity: Number,
            wash_type: Array,
            price: Number
        }
    

})

const productModal = mongoose.model("product", productSchema);
module.exports = productModal;