const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_cakes', {useNewUrlParser: true});
module.exports = mongoose