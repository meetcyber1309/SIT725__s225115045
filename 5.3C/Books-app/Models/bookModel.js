const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    summary: { type: String, required: true },
    price: { type: mongoose.Types.Decimal128, required: true } // AUD Price stored as Decimal128 
});

module.exports = mongoose.model('Book', bookSchema);