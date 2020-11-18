const postInput = async (url="", userInput = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInput)
        });
        
        if (response.ok) {
            const JSONresponse = await response.json();
            console.log(JSONresponse);
            // !!! CODER HERE: getting the data from API works

            return JSONresponse;
        }
    }
    
    catch(error) {
        console.log(error);
    }
};

export { postInput };