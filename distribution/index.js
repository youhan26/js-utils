'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _str = require('./str');

var _str2 = _interopRequireDefault(_str);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

var _money = require('./money');

var _money2 = _interopRequireDefault(_money);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _url = require('./url');

var _url2 = _interopRequireDefault(_url);

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UTILS = {
  str: _str2.default, money: _money2.default, time: _time2.default, phone: _phone2.default, url: _url2.default,
  common: _common2.default
};

exports.default = UTILS;