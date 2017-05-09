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
const handlers = handler('.container');

const routes = menu.map(item => {
	return {
		path: '/' + item.name.toLowerCase(),
		handler: handlers[item.name.toLowerCase()]
	}
});

const r = new Router(routes).parse(menuEl.querySelectorAll('a'));
r.start();