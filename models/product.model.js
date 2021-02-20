const mongoose = require('../database');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    value: { type: Number, required: true },
    owner: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema, 'product');