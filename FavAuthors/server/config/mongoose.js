const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fav_authors', {useNewUrlParser: true});
module.exports = mongoose