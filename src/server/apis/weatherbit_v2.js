const fetch = require("node-fetch");
// 2) --------------------------------- WeatherBit API
// If withing a week --> get current weather forecast (for that day)
// If later --> get a predicted forecast (use historic average)

// --- V2 predicted (historic average)
const getAverageWeather = async (baseURL, key, lat, lng, startD, endD, dayIndex) => {
    const requestURL =`${baseURL}${key}&lat=${lat}&lon=${lng}&start_date=${startD}&end_date=${endD}`;

    const response = await fetch(requestURL);
    try {
        if (response.ok) {
            const response_js = await response.json();
            
            const weatherData = {
                highTemp: response_js.data[0].max_temp,
                lowTemp: response_js.data[0].min_temp,
                date: response_js.data[0].datetime,
                cloudCoverage: response_js.data[0].clouds
            };
            return weatherData;
        }
    }

    catch(error) {
        console.log(error);
    }
};

module.exports = getAverageWeather;