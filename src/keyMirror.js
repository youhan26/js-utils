/**
 * Created by: YouHan
 * Date: 2019/5/14 21:59
 * file: keyMirror.js
 */


/**
 * Utility for constructing enums with keys being equal to the associated
 * values, even when using advanced key crushing. This is useful for debugging,
 * but also for using the values themselves as lookups into the enum.
 * Example:
 * var COLORS = keyMirror({blue: null, red: null});
 * var myColor = COLORS.blue;
 * var isColorValid = !!COLORS[myColor]
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 * Input:  {key1: val1, key2: val2}
 * Output: {key1: key1, key2: key2}
 */
function keyMirror(obj) {
	const ret = {};
	let key;

	if (!(obj instanceof Object) || Array.isArray(obj)) {
		throw new Error('not object');
	}

	for (key in obj) {
		if (!obj.hasOwnProperty(key)) {
			continue;
		}
		ret[key] = key;
	}
	return ret;
}

export default keyMirror;
