/**
 * Created by geeku on 09/05/2017.
 */

export default function (el) {
	el = typeof el === 'string' ? document.querySelector(el) : el;
	return {
		'bubbling': () => {
			import(/* webpackChunkName: "demo" */ 'DEMO/bubbling').then(bubbling => bubbling.init(el))
			// require.ensure([], function(require){
			// 	require().init(el);
			// }, 'modules');
		}
	}
}