const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task', {useNewUrlParser: true});
module.exports = mongoose