import is from './is.js';

const {isObject, isFunction, isDate} = is;

function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}

function baseExtend(dst, objs, deep) {
  const h = dst.$$hashKey;
  
  for (let i = 0, ii = objs.length; i < ii; ++i) {
    const obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    const keys = Object.keys(obj);
    for (let j = 0, jj = keys.length; j < jj; j++) {
      const key = keys[j];
      const src = obj[key];
      
      if (deep && isObject(src)) {
        if (isDate(src)) {
          dst[key] = new Date(src.valueOf());
        } else {
          if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
          baseExtend(dst[key], [src], true);
        }
      } else {
        dst[key] = src;
      }
    }
  }
  
  setHashKey(dst, h);
  return dst;
}

function setHashKey(obj, h) {
  if (h) {
    obj.$$hashKey = h;
  } else {
    delete obj.$$hashKey;
  }
}

function noop() {

}

export default {
  noop,
  extend,
};