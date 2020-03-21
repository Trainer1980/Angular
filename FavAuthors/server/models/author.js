const mongoose = require('../config/mongoose.js');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3}
}, {timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author