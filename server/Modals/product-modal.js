const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    order_id:{
        type: String,
        required: true,
    },
    date_time:{
        type: String,
        required: true,
    },
    store_Info:{
        type: String,
        required: true,
    },
    user_Address: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
    },
    items:{
        type : String,
        required: true,
    }

})

const productModal = mongoose.model("product", productSchema);
module.exports = productModal;