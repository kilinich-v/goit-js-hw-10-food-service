const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme');

const menuRef = document.querySelector('.js-menu');
const sourceRef = document.querySelector('#template');
const themeImputRef = document.querySelector('#theme-switch-toggle');

themeImputRef.addEventListener('change', onThemeToggle);

function onThemeToggle(event) {
    if (event.target.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

const enableDarkMode = () => {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
}

const disableDarkMode = () => {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light-theme');
}

if (theme === 'dark-theme') {
    themeImputRef.checked = true;
    enableDarkMode();
} else {
    themeImputRef.checked = false;
    disableDarkMode();
}
