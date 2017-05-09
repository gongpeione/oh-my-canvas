/**
 * Created by geeku on 09/05/2017.
 */

export default function (el) {
	el = typeof el === 'string' ? document.querySelector(el) : el;
	return {
		'bubbling': () => {
			require.ensure([], function(require){
				require('DEMO/bubbling').init(el);
			});
		}
	}
}