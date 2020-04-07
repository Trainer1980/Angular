const express = require('express');
const app = express();


app.use(express.static( __dirname + '/news-app/dist/news-app' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(4200, () => console.log("listening on port 4200"));