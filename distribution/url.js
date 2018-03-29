'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * cleanParams
 * @param data
 * @returns {*}
 */
var cleanParams = function cleanParams(data) {
  if (!data) {
    return null;
  }
  var newData = {};
  Object.keys(data).forEach(function (key) {
    if (newData[key] !== '' && newData[key] !== null && newData[key] !== undefined) {
      newData[key] = encodeURI(encodeURI(data[key]));
    }
  });
  return newData;
};

/**
 * getUrlParams
 * input: http:/fdsfsdf?a=1&b=2
 * output: {a: 1, b: 2}
 * @param keys
 * @returns {{}}
 */
var getUrlParams = function getUrlParams(keys) {
  var value = {};
  var search = window.location.search;
  if (search && search.length >= 1) {
    var temp = search.substr(1);
    var arr = temp.split('&');
    arr.forEach(function (item) {
      var datas = item.split('=');
      value[datas[0]] = datas[1];
    });
  }

  if (keys && keys instanceof Array) {
    var result = {};
    keys.forEach(function (key) {
      result[key] = value[key];
    });
    return result;
  }
  return value;
};

var url = {
  getUrlParams: getUrlParams,
  cleanParams: cleanParams
};

exports.default = url;