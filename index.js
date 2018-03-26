const express = require('express');
const app = express();

const bodyParser = require('body-parser');      // req.body (req.query ?id=121, req.params /:id)
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({
    secret: "I AM GENEROus",
    resave: true ,
    saveUninitialized: true
}));

app.use('/', require('./routes'));

const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("App running on port " + port);
});