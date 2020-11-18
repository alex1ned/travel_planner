const fetch = require("node-fetch");

const getImages = async (baseURL, key, location) => {
    const requestURL =`${baseURL}${key}&q=${location}&image_type=photo`;
    const response = await fetch(requestURL);
    try {
      if (response.ok) {
        const response_js = await response.json();
  
        const pictureData = {
          first: {
            webURL: response_js.hits[0].webformatURL,
            largeURL: response_js.hits[0].largeImageURL
          },
          second: {
            webURL: response_js.hits[1].webformatURL,
            largeURL: response_js.hits[1].largeImageURL
          },
          third: {
            webURL: response_js.hits[2].webformatURL,
            largeURL: response_js.hits[2].largeImageURL
          }
        };
        return pictureData;
      }
    }
  
    catch(error) {
      console.log(error);
    }
};

module.exports = getImages;