"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(num) {
  var n = Number(num);
  return "$".concat(n.toFixed(0).replace(/./g, function (c, i, a) {
    var currency = i && c !== "." && (a.length - i) % 3 === 0 ? ", ".concat(c).replace(/\s/g, "") : c;
    return currency;
  }));
}