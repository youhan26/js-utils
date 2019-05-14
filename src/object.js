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


export default {
	pick,
	omit
};
