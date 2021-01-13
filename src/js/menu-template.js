import * as menu from './menu.json';
import Handlebars from 'Handlebars';

const menuRef = document.querySelector('.js-menu');
const sourceRef = document.querySelector('#template');

const template = Handlebars.compile(sourceRef.innerHTML);
const html = menuArray => menuArray.map(dish => template(dish));

menuRef.innerHTML = html(menu.default).join('');