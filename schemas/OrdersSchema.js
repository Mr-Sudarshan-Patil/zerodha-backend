const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
        name: String,
        qty: Number,
        price: Number,
        mode: String,
});

module.exports = {HoldingsSchema};