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

  if (Number.isInteger(parseFloat(money))) {
    return parseInt(money);
  }
  return parseFloat(money).toFixed(2);
};

var money = {
  fix2End: formatMoney
};

exports.default = money;