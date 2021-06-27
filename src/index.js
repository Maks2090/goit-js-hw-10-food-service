import menuDatabase from './menu.json';
import markup from './templates/events.hbs';
import './sass/main.scss';

const ulMenu = document.querySelector('.js-menu');
const body = document.querySelector('body');

ulMenu.innerHTML = markup (menuDatabase);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme', 
};


