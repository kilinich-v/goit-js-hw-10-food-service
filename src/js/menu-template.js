import * as menu from './menu.json';

const menuTemplate = require('../templates/menu.hbs');
const menuRef = document.querySelector('.js-menu');

const html = menuArray => menuArray.map(dish => menuTemplate(dish));

menuRef.innerHTML = html(menu.default).join('');