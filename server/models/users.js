const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    orders: {
        orderID: String,
        orderDate: Date,
        orderPrice: String,
        orderStatus: String
    },
    cart: {
        type: Array
    }
})
 
module.exports = mongoose.model('users', userSchema);