// -------------------------------------- GLOABL VARIABLES
const PORT = 8081;

const dotenv = require('dotenv');
dotenv.config();

const geoNamesApi = {
    baseURL: 'http://api.geonames.org/searchJSON?q=',
    username: process.env.GEONAMES_API_USERNAME
};

const weatherBitApi = {
    baseURL: "http://api.weatherbit.io/v2.0/forecast/daily?key=",
    averageBaseUrl: "http://api.weatherbit.io/v2.0/history/daily?key=",
    apiKey: process.env.WEATHERBIT_API_KEY
};

const pixabyApi = {
    baseURL: "https://pixabay.com/api/?key=",
    apiKey: process.env.PIXABAY_API_KEY
};



// -------------------------------------- IMPORTS
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const getDataFromGeoNames = require('./apis/geonames.js');
const getWeather = require('./apis/weatherbit_v1.js');
const getAverageWeather = require('./apis/weatherbit_v2.js');
const getImages = require('./apis/pixabay.js');


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
    const receivedInput = req.body;

    if (receivedInput) {
        const latLng = await getDataFromGeoNames(geoNamesApi.baseURL, geoNamesApi.username, receivedInput.location);
        
        let weatherData = {};
        
        if (receivedInput.departureWithinWeek) {
            weatherData = await getWeather(weatherBitApi.baseURL, weatherBitApi.apiKey, latLng.latitude, latLng.longitude, receivedInput.dateIndex);
        }
        
        else {
            weatherData = await getAverageWeather(weatherBitApi.averageBaseUrl, weatherBitApi.apiKey, latLng.latitude, latLng.longitude, receivedInput.depDateForAPI, receivedInput.departureDatePlus1, receivedInput.dateIndex);
        }

        const imageData = await getImages(pixabyApi.baseURL, pixabyApi.apiKey, receivedInput.location);
        
        let apiData = {
            withinWeek: receivedInput.departureWithinWeek,
            weather: weatherData,
            images: imageData
        };
        res.status(201).send(apiData);
    }
    else {
        res.status(400).send();
    }
};
app.post('/postingUserInputs', postingUserInputs);