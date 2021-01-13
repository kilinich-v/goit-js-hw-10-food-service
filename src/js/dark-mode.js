const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let darkMode = localStorage.getItem('darkMode');

const menuRef = document.querySelector('.js-menu');
const sourceRef = document.querySelector('#template');
const themeImputRef = document.querySelector('#theme-switch-toggle');

themeImputRef.addEventListener('change', () => {
    if (event.target.checked === true) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    themeImputRef.checked = true;
    enableDarkMode();
}
