// !!! ADD IMPORTS and EXPORTS HERE

import { handleSubmit } from './js/formHandler.js';
import { validateForm } from './js/input_validation/formValidation.js';
import { postInput } from './js/post_input/postInput.js';

// Import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';

// IMPORT JS FILE
// import './js/formHandler.js';


// Export functions
export {
    handleSubmit,
    validateForm,
    postInput
};

// Note: do not append functions directly to button but
// use .addEventListener()

// Note that if we export functions from our application.js file,
// our event listeners can't go there -- where can we put them?
