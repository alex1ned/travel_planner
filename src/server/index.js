// -------------------------------------- GLOABL VARIABLES
const PORT = 8081;


// -------------------------------------- IMPORTS
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// -------------------------------------- INITIATE SERVER
const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})


// -------------------------------------- SERVER ROUTES
const postingUserInputs = async (req, res) => {
    console.log("::: POSTING to server works :::");
    const receivedInput = req.body;

    if (receivedInput) {
        // Here receivedInput is an object: {location: "some-string", isValid: true o false, departureDate: "dd/mm/yyy", returnDate: "dd/mm/yyy"}
        // - Code here: call three APIs
        
        const textToAnalyse = receivedInput.location;
        let analysis = {location: textToAnalyse};
        // Call APIs here
        // const apiResponse = await getSentiment(urlToAPI, textToAnalyse, modelType);                
        // let analysis = transposeAPIresponse(apiResponse);
        res.status(201).send(analysis);
    }
    else {
        res.status(400).send();
    }
};
app.post('/postingUserInputs', postingUserInputs);