const mongoose = require('../database');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: { type: String, required: [true, 'email obrigatório'], unique: true },
    name: { type: String, required: true },
    cellphone: { type: String, required: true },
    validator_code: { type: String },
    validator_time: { type: Date },
    token: { type: String, unique: true },
    verified: { type: Boolean, default: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema, 'user');