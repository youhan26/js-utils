function pick(obj, keys) {
	if (!obj || !keys) {
		return null;
	}

	const result = {};
	for (let i = 0, ii = keys.length; i < ii; i++) {
		const key = keys[i];
		if (obj.hasOwnProperty(key)) {
			result[key] = obj[key];
		}
	}
}


function omit(obj, keys) {
	if (!obj || !keys) {
		return;
	}

	for (let i = 0, ii = keys.length; i < ii; i++) {
		const key = keys[i];
		if (obj.hasOwnProperty(key)) {
			delete obj[key];
		}
	}
}

/**
 * Similar to Object.keys() but does not fail on empty parameter.
 */
function keys(obj) {
	const s = [];
	for (const i in obj) {
		if (obj.hasOwnProperty(i)) {
			s.push(i);
		}
	}
	return s;
}


export default {
	pick,
	omit,
	keys
};
