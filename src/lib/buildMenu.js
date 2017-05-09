/**
 * Created by geeku on 09/05/2017.
 */
import menu from 'CONF/menu.json';

export default function buildMenus (el) {
	el = typeof el === 'string' ? document.querySelector(el) : el;

	const menuList = menu.map(item => {
		const name = item.name;
		return `<a href="/${name.toLowerCase()}">${name}</a>`;
	}).join('');

	el.innerHTML = menuList;
}