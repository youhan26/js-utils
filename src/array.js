/**
 * hasArrayNature
 * @param obj
 * @returns {boolean}
 */
function hasArrayNature(obj) {
	return (
		// not null/false
		!!obj &&
		// arrays are objects, NodeLists are functions in Safari
		(typeof obj == 'object' || typeof obj == 'function') &&
		// quacks like an array
		('length' in obj) &&
		// not window
		!('setInterval' in obj) &&
		(
			// a real array
			Object.prototype.toString.call(obj) === "[object Array]" ||
			// arguments
			('callee' in obj) ||
			// HTMLCollection/NodeList
			('item' in obj)
		)
	);
}

// isArr(nodeList): false
function isArr(arr) {
	return Array.isArray(arr);
}

function contains(arr, item) {
	return isArr(arr) && arr.indexOf(item) > -1;
}

function removeAt(arr, index) {
	if (isArr(arr)) {
		return !!arr.splice(index, 1).length;
	}
	return false;
}

function remove(arr, item) {
	if (isArr(arr)) {
		const index = arr.indexOf(item);
		/**
		 * ~-1 : 0
		 * ~0 : -1
		 * ~1: -2
		 * ~true：-2
		 * ~false: -1
		 */
		if (~index) {
			return removeAt(arr, index);
		}
	}
	return false;
}


function fatten(arr) {
	let result = [];
	if (isArr(arr)) {
		arr.forEach(function (item) {
			if (isArr(item)) {
				result = result.concat(fatten(item));
			} else {
				result.push(item);
			}
		});
	}
	return result;
}

function compact(arr) {
	return arr.filter(function (item) {
		return item !== null && item !== void 0;
	});
}

function pluck(arr, field) {
	if (isArr(arr)) {
		const result = [];
		arr.forEach(function (item) {
			const data = item[field];
			if (data) {
				result.push(data);
			}
			return result;
		});
	}
	return [];
}

export default {
	pluck,
	compact,
	fatten,
	remove,
	isArr,
	removeAt,
	contains
};
