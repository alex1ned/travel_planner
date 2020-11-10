const postInput = async (url="", userInput = {}) => {
    try {
        // console.log(`::: 3) Log the user inputs from (postInput client side) :::`);
        // console.log(userInput);
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
            return JSONresponse;
        }
    }
    
    catch(error) {
        console.log(error);
    }
};

export { postInput };