'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MINUTE = 60 * 1000;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;

/**
 * calculateTime
 * @param time
 * @returns {*}
 */
var showBefore = function showBefore(time) {
  var m = new Date().getTime() - time;
  if (m <= 5 * MINUTE) {
    return '刚刚';
  } else if (m < HOUR) {
    return Math.floor(m / MINUTE) + '\u5206\u949F\u524D';
  } else if (m < DAY) {
    return Math.floor(m / HOUR) + '\u5C0F\u65F6\u524D';
  } else if (m < WEEK) {
    return Math.floor(m / DAY) + '\u5929\u524D';
  }
  return '1周前';
};

var formatSingle = function formatSingle(num) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (num <= size - 1) {
    return '0' + num;
  }
  return num;
};

/**
 * formatDateTime
 * output: 1992-1-11 6:01:01
 * @param num
 * @returns {string}
 */
var formatDateTime = function formatDateTime(num) {
  if (!num) {
    return '';
  }
  var date = new Date(num);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + formatSingle(date.getMinutes()) + ':' + formatSingle(date.getSeconds());
};

/**
 * getMessageDate
 * @param num
 * @returns {string}
 */
var getMessageDate = function getMessageDate(num) {
  var date = new Date();
  var target = new Date(num);
  if (target.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)) {
    var target2 = new Date(num);
    return target2.getHours() + ':' + target2.getMinutes();
  } else if (target.getFullYear() === date.getFullYear()) {
    return target.getMonth() + 1 + '\u6708' + target.getDate() + '\u65E5';
  }
  return target.getFullYear() + '\u5E74' + (target.getMonth() + 1) + '\u6708' + target.getDate() + '\u65E5';
};

/**
 * formatDate
 * output: 1993.9.1
 * @param timeNum
 * @returns {string}
 */
var formatDate = function formatDate(timeNum) {
  if (!timeNum) {
    return '无';
  }
  var result = '无';
  try {
    result = new Date(timeNum).toLocaleDateString().replace(/\//g, '.');
  } catch (err) {
    return '无';
  }
  return result;
};

var time = {
  MINUTE: MINUTE,
  HOUR: HOUR,
  DAY: DAY,
  WEEK: WEEK,
  showBefore: showBefore,
  formatDateTime: formatDateTime,
  formatDate: formatDate
};

exports.default = time;