import { getUser, signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
const user = getUser();
if (!user) {
    const base =
        location.pathname === '/' || location.pathname === '/solutions-web/user-auth/'
            ? './'
            : '../';
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
}

signOutLink.addEventListener('click', signOutUser);
