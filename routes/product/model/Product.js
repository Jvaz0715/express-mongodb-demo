const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
});// end

module.exports = mongoose.model("product", productSchema);