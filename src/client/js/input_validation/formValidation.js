const dateValidation = (dateString) => {
    let isValid = true;
    const correctPattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    // console.log(correctPattern.test(dateString));
    if (dateString === '' || dateString === null || !correctPattern.test(dateString)) {
        isValid = false;
    }
    return isValid;
};

const locationValidation = (locationString) => {
    let isValid = true;

    if (locationString === '' || locationString === null) {
        isValid = false;
    }
    return isValid;
};

const validateForm = () => {
    let isValid = true;

    const inputLocationEl = document.querySelector('#location-input');
    const inputDepartureEl = document.querySelector('#departure-input');
    const inputReturnEl = document.querySelector('#return-input');

    const location = inputLocationEl.value;
    const departureDate = inputDepartureEl.value;
    const returnDate = inputReturnEl.value;

    const resultsParagraph = document.querySelector('.results-placeholder p');
    const resultsI = document.querySelector('.results-placeholder i');

    if (!locationValidation(location)) {
        console.log(":::Location invalid:::");
        inputLocationEl.classList.remove('valid');
        inputLocationEl.classList.add('invalid');
    }

    if (!dateValidation(departureDate)) {
        console.log(":::Departure Date invalid:::");
        inputDepartureEl.classList.remove('valid');
        inputDepartureEl.classList.add('invalid');
    }

    if (!dateValidation(returnDate)) {
        console.log(":::Return Date invalid:::");
        inputReturnEl.classList.remove('valid');
        inputReturnEl.classList.add('invalid');
    }

    if (!dateValidation(departureDate) || !dateValidation(returnDate) || !locationValidation(location)) {
        resultsParagraph.classList.remove('valid');
        resultsParagraph.classList.add('invalid');
        resultsParagraph.innerHTML = "The inputs you have provided are invalid, please try again . . .";
        resultsI.classList.remove('valid');
        resultsI.classList.add('invalid');

        isValid = false;
    }
    
    const infoForApi = {
        isValid: isValid,
        location: location,
        departureDate: departureDate,
        returnDate: returnDate
    };
    
    return infoForApi;
};


export {
    dateValidation,
    validateForm
};