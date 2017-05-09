/**
 * Created by geeku on 09/05/2017.
 */
export default function (parent, template) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
	parent.innerHTML = template;
	return parent;
}