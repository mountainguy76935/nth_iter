const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.js'))
})

app.listen(process.env.PORT || 8080)
