'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * format price
 */
var formatMoney = function formatMoney(money) {
  if (!money) {
    return '0';
  }
  if (('' + money).indexOf('.') !== -1) {
    return parseFloat(money).toFixed(2);
  }
  return parseInt(money);
};

var money = {
  fix2End: formatMoney
};

exports.default = money;