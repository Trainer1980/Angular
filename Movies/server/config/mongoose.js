const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt_exam', {useNewUrlParser: true});
module.exports = mongoose