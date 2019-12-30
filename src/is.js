function isType(type){
	return function(obj){
		return obj !== null && Object.prototype.toString.call(obj) === `[object ${type}]`
	}
}

// const isPlainObject = isType('Object');
const isFunction = isType('Function');
const isArray = Array.isArray || isType('Array');
const isBlob = isType('Blob');
const isDate = isType('Date');
const isRegExp = isType('RegExp');

function isObject(arg) {
	return arg !== null && typeof arg === 'object';
}

// notice: window.isNaN() === true
function isNaN(obj) {
	return obj !== obj;
}

function isPlainObject(value) {
	return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
}

function isNull(obj) {
	return obj === null;
}

function isUndefined(obj) {
	return obj === void 0;
}

function isNumber(value) {
	return typeof value === 'number';
}

function isWindow(obj) {
	return obj && obj.window === obj;
}

function isBoolean(value) {
	return typeof value === 'boolean';
}

function isPromiseLike(obj) {
	return obj && isFunction(obj.then);
}

function isString(value) {
	return typeof value === 'string';
}

export default {
	isNaN,
	isNull,
	isUndefined,
	isObject,
	isFunction,
	isDate,
	isNumber,
	isBlob,
	isBoolean,
	isPromiseLike,
	isString,
	isPlainObject,
	isWindow
};
