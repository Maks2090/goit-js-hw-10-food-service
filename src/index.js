import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import menuDatabase from './menu.json';
import markup from './templates/markup.hbs';
import './sass/main.scss';

const ulMenu = document.querySelector('.js-menu');
const body = document.querySelector('body');
const togget = document.querySelector('#theme-switch-toggle');

ulMenu.innerHTML = markup (menuDatabase);



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme', 
};



function checkStorage(){
    body.classList.add(Theme.LIGHT); 
    if (localStorage.getItem('checkbox') === 'true') {
        body.classList.add(localStorage.getItem('theme'))
        togget.checked = localStorage.getItem('checkbox')
    }

}


checkStorage();

togget.addEventListener('change', changeTheme );

function changeTheme () {

    if (togget.checked){
       body.classList.remove(Theme.LIGHT);
       body.classList.add(Theme.DARK);
       
       localStorage.setItem('theme', Theme.DARK);
       localStorage.setItem('checkbox', true);
    }
    
   else if  (!togget.checked){
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('checkbox', false);
   }
 

};

