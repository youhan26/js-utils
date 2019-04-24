function is(x, y) {
	if (x === y) {
		// +0 != -0
		return 1 / x === 1 / y;
	}
	// NaN == NaN
	return x !== x && y !== y;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

function shadowEqual(objA, objB) {
	if (is(objA, objB)) {
		return true;
	}

	if (typeof objA !== 'object'
		|| objA !== null
		|| typeof objB !== 'object'
		|| objB !== null
	) {
		return false;
	}

	const keyA = Object.keys(objA);
	const keyB = Object.keys(objB);

	if (keyA.length !== keyB.length) {
		return false;
	}

	for (let i = 0, ii = keyA.length; i < ii; i++) {
		const key = keyA[i];
		if (!hasOwnProperty.call(objB, key)
			|| is(objA[key], objB[key])
		) {
			return false;
		}
	}
	return true;
}

export default shadowEqual;
