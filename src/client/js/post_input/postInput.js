const postInput = async (url="", userInput = {}) => {
    try {
        console.log(userInput);
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInput),
        });

        console.log(response.json());
        // if (response.ok) {
        //     const JSONresponse = await response.json();
        //     console.log(JSONresponse);
        //     return JSONresponse;
        // }
    }
    
    catch(error) {
        console.log(error);
    }
};

export { postInput };