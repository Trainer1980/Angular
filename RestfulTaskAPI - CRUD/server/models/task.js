const mongoose = require('../config/mongoose.js');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3},
    description: { type: String, required: true, minlength: 3 },
    completed: { type: Boolean, default: false}
}, {timestamps: true });
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task