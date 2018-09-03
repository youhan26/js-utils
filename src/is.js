
function isObject(arg) {
  return arg !== null && typeof arg === 'object';
}

// notice: window.isNaN() === true
function isNaN(obj) {
  return obj !== obj;
}

function isNull(obj) {
  return obj === null;
}

function isUndefined(obj) {
  return obj === void 0;
}


function isFunction(arg) {
  return typeof arg === 'function';
}

function isDate(value) {
  return toString.call(value) === '[object Date]';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isWindow(obj) {
  return obj && obj.window === obj;
}

function isBlob(obj) {
  return toString.call(obj) === '[object Blob]';
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

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
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