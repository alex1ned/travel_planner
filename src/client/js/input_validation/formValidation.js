const convertDateToInts = (aDate) => {
    let theDate = aDate.split("/");
    let datesAsInts = [];
  
    for (let i = 0; i < theDate.length; i++) {
      datesAsInts[i] = parseInt(theDate[i]);
    }
    return datesAsInts;
};

const validateDate = (aDate) => {
    let isValid = true;

    if (aDate[1] === 4 || aDate[1] === 6 || aDate[1] === 9 || aDate[1] === 11) {
        if (aDate[0] <= 0 || aDate[0] > 30) {
        isValid = false;
        }
    }

    else if (aDate[1] === 2 && (aDate[2] % 4) != 0) {
        if (aDate[0] <= 0 || aDate[0] > 28) {
        isValid = false;
        }
    }

    else if (aDate[1] === 2 && (aDate[2] % 4) === 0) {
        if (aDate[0] <= 0 || aDate[0] > 29) {
        isValid = false;
        }
    }

    else if (aDate[0] <= 0 || aDate[0] > 31) {
        isValid = false;
    }

    else if (aDate[1] <= 0 || aDate[1] > 12) {
        isValid = false;
    }

    else if (aDate[2] <= 0) {
        isValid = false;
    }
    return isValid;
};

const convertDateToString = (aDate) => {
    let newDate = [];
    for (let i = aDate.length-1; i >= 0; i--) {
        newDate.push(aDate[i]);
    }
    let theDate = newDate.join('-');
    return theDate;
};

const isDateWithinWeek = (aDate) => {
    let withinWeek = false;
    const today = new Date();
    const departureDate = new Date(convertDateToString(convertDateToInts(aDate)));

    const diffInTime = departureDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))

    if (departureDate > today && diffInDays < 7) {
        withinWeek = true;
    }
    return withinWeek;
};

const dateIndexForApi = (aDate) => {
    const today = new Date();
    const departureDate = new Date(convertDateToString(convertDateToInts(aDate)));

    const diffInTime = departureDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    return diffInDays;
}

const dateDifference = (aDate, bDate) => {
    const departureDate = new Date(convertDateToString(convertDateToInts(aDate)));
    const returnDate = new Date(convertDateToString(convertDateToInts(bDate)));

    const diffInTime = returnDate.getTime() - departureDate.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    return diffInDays;
}
  
const isDateInFuture = (aDate) => {
    let inFuture = true;
    const today = new Date();
    const departureDate = new Date(convertDateToString(convertDateToInts(aDate)));

    if (departureDate < today) {
        inFuture = false;
    }
    return inFuture;
};

const getDateMinus1Year = (aDate) => {
    const dateMinus1 = new Date(convertDateToString(convertDateToInts(aDate)));
    const today = new Date();

    const diffInTime = dateMinus1.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    const diffInYears = Math.ceil(diffInDays/365);
    

    dateMinus1.setFullYear(dateMinus1.getFullYear() - diffInYears);
    const dateString = dateMinus1.getFullYear() + "-" + (dateMinus1.getMonth() + 1) + "-" + dateMinus1.getDate();
    return dateString;
};

const getDatePlus1 = (aDate) => {
    const datePlus1 = new Date(convertDateToString(convertDateToInts(aDate)));
    const today = new Date();
    const diffInTime = datePlus1.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    const diffInYears = Math.ceil(diffInDays/365);

    datePlus1.setDate(datePlus1.getDate() + 1);
    datePlus1.setFullYear(datePlus1.getFullYear() - diffInYears);
    const datePlus1String = datePlus1.getFullYear() + "-" + (datePlus1.getMonth() + 1) + "-" + datePlus1.getDate();

    return datePlus1String;
};

const dateValidation = (dateString) => {
    let isValid = true;
    const correctPattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (dateString === '' || dateString === null || !correctPattern.test(dateString)) {
        isValid = false;
    }

    if (!validateDate(convertDateToInts(dateString))) {
        isValid = false;
    }

    if (!isDateInFuture(dateString)) {
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
    
    if (isValid) {
        // const depDateForAPI = convertDateToString(convertDateToInts(departureDate));
        const depDateForAPI = getDateMinus1Year(departureDate);
        const retDateForAPI = convertDateToString(convertDateToInts(returnDate));
        const departureWithinWeek = isDateWithinWeek(departureDate);
        const dateIndex = dateIndexForApi(departureDate);
        const departureDatePlus1 = getDatePlus1(departureDate);
        const durationOfHoliday = dateDifference(departureDate, returnDate);

        const infoForApi = {
            isValid: isValid,
            location: location,
            departureDate: departureDate,
            returnDate: returnDate,
            depDateForAPI: depDateForAPI,
            retDateForAPI: retDateForAPI,
            departureWithinWeek: departureWithinWeek,
            dateIndex: dateIndex,
            departureDatePlus1: departureDatePlus1,
            durationOfHoliday: durationOfHoliday
        };
        
        return infoForApi;
    }

    else {
        return "ERROR: Input invalid!";
    }
};


export {
    dateValidation,
    validateForm
};