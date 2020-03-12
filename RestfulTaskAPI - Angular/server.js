const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost:27017/1955_api', {useNewUrlParser: true});

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));