import { validateForm } from "./input_validation/formValidation";

const handleSubmit = (event) => {
    console.log("::: Handle submit is processed :::");
    event.preventDefault();

    // Validate inputs and store them
    let  userInputs = validateForm();
    
    // If inputs are valid .. send the information to the api
    if (userInputs.isValid) {
        
    }
};







// const submitButton = document.querySelector('.submit-button');

// TEMPLATE FUNCTION (needs to be changed)
// OLD
// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

export { handleSubmit }
