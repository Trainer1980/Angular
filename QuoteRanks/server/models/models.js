const mongoose = require('../config/mongoose.js');

const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quotes: [{
        content: { type: String, required: true, minlength: 3 },
        votes: { type: Number, required: true, default: 0 },
    }]
}, { timestamps: true });

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote