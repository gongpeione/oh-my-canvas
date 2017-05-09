/**
 * Created by geeku on 09/05/2017.
 */
import replace from 'LIB/replaceContent';
import Bubbling from './Bubbling';
// import template from 'template.html'

import './style.scss';

export function init (parent) {
	console.log(parent)
	parent.innerHTML = '<canvas class="bubbling"></canvas>';
	parent.id = 'bubbling';

	const canvas = document.querySelector('canvas.bubbling');
	const canvasRect = canvas.getBoundingClientRect();
	new Bubbling(canvas, {
		width: canvasRect.width,
		height: canvasRect.height,
		maxCircle: 200
	});
}