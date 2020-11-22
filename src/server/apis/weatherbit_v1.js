const fetch = require("node-fetch");
// 2) --------------------------------- WeatherBit API
// If withing a week --> get current weather forecast (for that day)
// If later --> get a predicted forecast (use historic i.e. one year ago)
// --- V1 now
const getWeather = async (baseURL, key, lat, lng, dayIndex) => {
    const requestURL =`${baseURL}${key}&lat=${lat}&lon=${lng}`;
    const response = await fetch(requestURL);

    try {
        if (response.ok) {
            const response_js = await response.json();

            const weatherData = {
                highTemp: response_js.data[dayIndex].high_temp,
                lowTemp: response_js.data[dayIndex].low_temp,
                description: response_js.data[dayIndex].weather.description,
                date: response_js.data[dayIndex].datetime,
                icon: response_js.data[dayIndex].weather.icon
            };
            
            return weatherData;
        }
    }

    catch(error) {
        console.log(error);
    }
};

module.exports = getWeather;