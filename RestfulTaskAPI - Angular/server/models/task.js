const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2},
    description: { type: String, required: true, minlength: 2 },
    completed: { type: Boolean, default: false,}
}, {timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);