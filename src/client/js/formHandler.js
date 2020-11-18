import { validateForm } from "./input_validation/formValidation.js";
import { postInput } from "./post_input/postInput.js";
import { updateUI } from "./updateUI/updateUI.js";

const handleSubmit = async(event) => {
    console.log("::: Handle submit is processed :::");
    event.preventDefault();

    // Validate inputs and store them
    let  userInputs = Client.validateForm();

    // If inputs are valid .. send the information to the server from where it goes to the APIs
    if (userInputs.isValid) {
        const apiData = await Client.postInput('http://localhost:8081/postingUserInputs', userInputs);
        Client.updateUI(apiData);
    }
};


export { handleSubmit }
