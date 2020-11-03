// -------------------------------------- GLOABL VARIABLES
const PORT = 8081;


// -------------------------------------- IMPORTS
const path = require('path');
const express = require('express');

// -------------------------------------- INITIATE SERVER
const app = express()
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})


// -------------------------------------- SERVER ROUTES
