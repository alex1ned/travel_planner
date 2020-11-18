import { validateForm } from "./input_validation/formValidation.js";
import { postInput } from "./post_input/postInput.js";

const handleSubmit = (event) => {
    console.log("::: 1) Handle submit is processed :::");
    event.preventDefault();

    // Validate inputs and store them
    let  userInputs = Client.validateForm();

    // If inputs are valid .. send the information to the server from where it goes to the APIs
    if (userInputs.isValid) {
        Client.postInput('http://localhost:8081/postingUserInputs', userInputs);
    }
};


export { handleSubmit }
