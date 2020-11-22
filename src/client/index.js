import { handleSubmit } from './js/formHandler.js';
import { validateForm } from './js/input_validation/formValidation.js';
import { postInput } from './js/post_input/postInput.js';
import { updateUI } from './js/updateUI/updateUI.js';

// Import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';
import './styles/results.scss';


// Export functions
export {
    handleSubmit,
    validateForm,
    postInput,
    updateUI
};
