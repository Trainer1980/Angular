const express = require('express');
const app = express();
const mongoose = require('mongoose');

const flash = require('express-flash');
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(4200, () => console.log("listening on port 4200"));