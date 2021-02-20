const mongoose = require('../database');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema, 'category');