import '../auth/user.js';
// > Part A: import updateProfile from fetch-utils.js
// > Part B: import getUser and getProfile from fetch-utils.js

// > Part B: get the user
const user = null; // ???

const errorDisplay = document.getElementById('error-display');
const profileForm = document.getElementById('profile-form');
const updateButton = profileForm.querySelector('button');
const userNameInput = profileForm.querySelector('[name=user_name]');
const bioTextArea = profileForm.querySelector('[name=bio]');

let profile = null;
let error = null;

window.addEventListener('load', async () => {
    // > Part B:
    //      - get the profile based on user.id
    //      - set profile and error state from response object

    if (error) {
        displayError();
    }

    if (profile) {
        displayProfile();
    }
});

profileForm.addEventListener('submit', async (e) => {
    // keep the form from changing the browser page
    e.preventDefault();

    // niceties for "saving" and errors:
    // reset the error
    errorDisplay.textContent = '';
    // remember the button text
    const buttonText = updateButton.textContent;
    // disabled button and change to "saving..."
    updateButton.disabled = true;

    // create a form data object for easy access to form values
    const formData = new FormData(profileForm);

    // > Part A
    //      - create a profile update object
    //      - call updateProfile passing in profile update object, capture the response
    const response = null; // ??????

    error = response.error;

    // did it work?
    if (error) {
        // display the error
        displayError();
        // reset the button to be active
        updateButton.disabled = false;
        // restore the button text to what it was
        updateButton.textContent = buttonText;
    } else {
        // > Part A: uncomment when working to redirect user
        // location.assign('../');
    }
});

function displayProfile() {
    // > Part B: update user name and bio from profile object
}

function displayError() {
    errorDisplay.textContent = error.message;
}
