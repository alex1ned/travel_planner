// ------- Collapse the element that is passed as function argument
// Please note: The functionality, the sort of leaned on to the source below
// Source: https://codepen.io/brundolf/pen/dvoGyw
function collapseContent(elementToCollapse) {
    // Get the height of the element's inner content
    const contentHeight = elementToCollapse.scrollHeight;
  
    const elementTransition = elementToCollapse.style.transition;
    elementToCollapse.style.transition = '';
  
    // Set the element's height to  current px -> not transitioning out of 'auto'
    requestAnimationFrame(function() {
      elementToCollapse.style.height = contentHeight + 'px';
      elementToCollapse.style.transition = elementTransition;
  
      // Set content height to 0
      requestAnimationFrame(function() {
        elementToCollapse.style.height = 0 + 'px';
      });
    });
    // Change class attribute to 'true'
    elementToCollapse.setAttribute('is-collapsed', 'true');
}




const updateUI = (apiData) => {
    console.log("::: In UPDATE UI Function :::");
    console.log(apiData);

    const results = document.querySelector('div.results');
    const resultsPlaceholder = document.querySelector('div.results-placeholder');
    
    const locationImage = document.createElement("img");
    locationImage.src = apiData.images.third.largeURL;
    locationImage.classList.add("location-image");
    
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add("weather-container");
    
    collapseContent(resultsPlaceholder);

    results.appendChild(locationImage);
    results.appendChild(weatherContainer);

    // ----------------------- DESCRIPTION Container
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    weatherContainer.appendChild(descriptionContainer);


    // ----------------------- DESCRIPTION
    const description = document.createElement("span");
    description.classList.add("description");

    // --------------- IF departure within week
    if (apiData.withinWeek) {
        description.innerHTML = `Your departure date is within week from today. In ${apiData.location} on your departure date the weather is predicted to be as follows . . .`;  
        descriptionContainer.appendChild(description);

        // ----------------------- Weather Data Container
        const weatherDataContainer = document.createElement("div");
        weatherDataContainer.classList.add("weather-data-container");
        weatherContainer.appendChild(weatherDataContainer);

        // ------------ Max temp
        const maxTemp = document.createElement("div");
        maxTemp.classList.add("weather-element");
        maxTemp.innerHTML = `Maximum temperature will be ${apiData.weather.highTemp} Celsius`;
        weatherDataContainer.appendChild(maxTemp);

        // ------------ Min temp
        const minTemp = document.createElement("div");
        minTemp.classList.add("weather-element");
        minTemp.innerHTML = `Minimum temperature will be ${apiData.weather.lowTemp} Celsius`;
        weatherDataContainer.appendChild(minTemp);

        // ------------ Weather description
        const weatherDescription = document.createElement("div");
        weatherDescription.classList.add("weather-element");
        weatherDescription.innerHTML = `Weather can be described as: ${apiData.weather.description}`;
        weatherDataContainer.appendChild(weatherDescription);

        // ------------ Weather Icon
        const weatherIcon = document.createElement("img");
        weatherIcon.classList.add("weather-element");
        weatherIcon.src = `./src/client/media/icons/${apiData.weather.icon}.png`
        weatherDataContainer.appendChild(weatherIcon);
    }
    
    // --------------- IF departure more than one week from today
    else if (!apiData.withinWeek) {
        description.innerHTML = `Your departure date is more than a week from today. Last year the weather in ${apiData.location} on your departure date was as follows . . .`;  
        descriptionContainer.appendChild(description);

        // ----------------------- Weather Data Container
        const weatherDataContainer = document.createElement("div");
        weatherDataContainer.classList.add("weather-data-container");
        weatherContainer.appendChild(weatherDataContainer);

        // ------------ Max temp
        const maxTemp = document.createElement("div");
        maxTemp.classList.add("weather-element");
        maxTemp.innerHTML = `Maximum temperature was ${apiData.weather.highTemp} Celsius`;
        weatherDataContainer.appendChild(maxTemp);

        // ------------ Min temp
        const minTemp = document.createElement("div");
        minTemp.classList.add("weather-element");
        minTemp.innerHTML = `Minimum temperature was ${apiData.weather.lowTemp} Celsius`;
        weatherDataContainer.appendChild(minTemp);

        // ------------ Cloud coverage
        const cloudCoverage = document.createElement("div");
        cloudCoverage.classList.add("weather-element");
        cloudCoverage.innerHTML = `Cloud coverage was ${apiData.weather.cloudCoverage}%`;
        weatherDataContainer.appendChild(cloudCoverage);
    }
};


export {
    updateUI
};