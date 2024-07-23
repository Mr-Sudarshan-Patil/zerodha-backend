const {Schema} = require("mongoose");


// this is over sturture of holdings 
const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingsSchema};