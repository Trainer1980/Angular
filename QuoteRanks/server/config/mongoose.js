const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteranks', {useNewUrlParser: true});
module.exports = mongoose