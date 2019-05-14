/**
 * from recompose
 * const compose = (...funcs) =>
 funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)
 * @param arg
 * @returns {*}
 */
function noop(arg) {
	return arg;
}

const compose = (...funcs) => {
	return funcs.reduce((current, total) => {
		return (...args) => {
			return current(total(...args));
		};
	}, noop);
};

export default compose;
