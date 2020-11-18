const fetch = require("node-fetch");

// 1) --------------------------------- GEONAMES API (WORKS)
//    * Returns object with latitude and longitude elements (for the location)
const getDataFromGeoNames = async (baseURL, username, city) => {
    const requestURL =`${baseURL}${city}&maxRows=1&username=${username}`;
    const response = await fetch(requestURL);
    const latitudeLongitude = {};

    try {
        if (response.ok) {
          const response_js = await response.json();
          latitudeLongitude.latitude = response_js.geonames[0].lat;
          latitudeLongitude.longitude = response_js.geonames[0].lng;
          return latitudeLongitude;
        }
    }
    catch(error) {
      console.log(error);
    }
};

module.exports = getDataFromGeoNames;


// WEATHERBIT_API_KEY=efd8953ee8434ec0b2978bfaf392aefa
// PIXABAY_API_KEY=18971010-18d7e31e820fe95309e7bc93a