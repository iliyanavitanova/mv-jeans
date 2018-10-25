// Product.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Product = new Schema({
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
    length: {
        type: Number
    }
}, {
        collection: 'products'
    });

module.exports = mongoose.model('Product', Product);