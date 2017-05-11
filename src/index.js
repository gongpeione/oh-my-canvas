/**
 * Created by geeku on 09/05/2017.
 */
import 'CSS/style.scss';
import buildMenu from 'LIB/buildMenu';
import menu from 'CONF/menu.json';
import Router from 'gee-router';
import handler from 'LIB/handler';

const menuEl = document.querySelector('nav.links');
buildMenu(menuEl);
const switcher = document.querySelector('label.switch');
const switchBox = document.querySelector('#switch');
console.log(switcher, switchBox);
switchBox.addEventListener('change', function () {
	this.checked && (switcher.classList.remove('hidden'));
	!this.checked && (switcher.classList.add('hidden'));
	console.log(this.checked);
});

const handlers = handler('.container');

const routes = menu.map(item => {
	return {
		path: '/' + item.name.toLowerCase(),
		handler: handlers[item.name.toLowerCase()],
		default: item.default || false
	}
});

const r = new Router(routes).parse(menuEl.querySelectorAll('a'));
r.afterEach((from, to) => {
	if (to.path.indexOf('home') > -1) return;
	switchBox.checked = false;
	switcher.classList.add('hidden');
});
r.start();

setTimeout(() => {
	switchBox.checked = true;
	switcher.classList.remove('hidden');
}, 1000);