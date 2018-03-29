'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isChinese = function isChinese(a) {
  return escape(a).indexOf('%u') > 0;
};

var sortItem = function sortItem(a, b) {
  if (!isChinese(a) && isChinese(b)) {
    return -1;
  }
  if (isChinese(a) && !isChinese(b)) {
    return 1;
  }
  return a.localeCompare(b, 'ch-ZH');
};

var str = {
  isChinese: isChinese
};

exports.default = str;