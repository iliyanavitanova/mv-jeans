// ProductSold.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ProductSold = new Schema({
    brand: {
        type: String
    },
    model: {
        type: String
    },
    size: {
        type: Number
    },
    count: {
        type: Number
    },
    price: {
        type: Number
    },
    wholesalePrice: {
        type: Number
    },
    profit: {
        type: Number
    }
}, {
        collection: 'productsSold'
    });

module.exports = mongoose.model('ProductSold', ProductSold);