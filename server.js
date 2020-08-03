require('dotenv').config()

const express = require('express');
const path = require('path');
//const contactRoute = require('./src/config/routes')
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//app.use(contactRoute)

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
