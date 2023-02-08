const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const orderSchema = new Schema({

    ordername:{
        type: String,
        required: true,
    },                            //OrderID, product name, product cost, date time and total cost
    cost: {
        type: String,
        required: true,
    },
    date: {
        type:String,
        required: true,
    },
    totalCost:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true, 
    }
    

})
module.exports = mongoose.model("order", orderSchema)