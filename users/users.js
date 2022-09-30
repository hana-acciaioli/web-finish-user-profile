// this will: check we have a user, set signout link, fetch user profile
import '../auth/user.js';
// > Part D import getUser and getProfiles from fetch-utils
import { getUser, getProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const profileList = document.getElementById('profile-list');

let error = null;
let profiles = [];

window.addEventListener('load', async () => {
    // > Part D: await getProfiles and assign error and profiles state
    const response = await getProfiles();
    error = response.error;
    profiles = response.data;

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
    const user = getUser();

    for (const profile of profiles) {
        // > Part D:
        //      - call renderProfile passing in the profile and
        //        the current user's id:
        const profileEl = renderProfile(profile, user.id);

        //      - append the rendered el to the list:
        profileList.append(profileEl);
    }
}
