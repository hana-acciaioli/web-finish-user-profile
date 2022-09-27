// this will: check we have a user, set signout link, fetch user profile
import '../auth/user.js';
// > Part D import getUser and getProfiles from fetch-utils
import { renderProfile } from '../render-utils.js';

const profileList = document.getElementById('profile-list');

let error = null;
let profiles = [];

window.addEventListener('load', async () => {
    // > Part D: await getProfiles and assign error and profiles state

    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    if (profiles) {
        displayProfiles();
    }
});

async function displayProfiles() {
    // > Part D: get the current user
    const user = null; // ???

    for (const profile of profiles) {
        // > Part D:
        //      - call renderProfile passing in the profile and
        //        the current user's id:
        //      - append the rendered el to the list:
    }
}
