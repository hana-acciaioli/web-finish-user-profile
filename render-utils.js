export function renderProfile(profile, userId) {
    const li = document.createElement('li');
    li.classList.add('profile');
    // > Part D: conditionally add "self" class to li if
    // this profile belongs to the current user
    if (userId === profile.id) {
        li.classList.add('self');
    }

    const userNameEl = document.createElement('h2');
    userNameEl.textContent = profile.user_name;

    const bioEl = document.createElement('p');
    bioEl.classList.add('bio');
    bioEl.textContent = profile.bio;

    li.append(userNameEl, bioEl);
    return li;
}
