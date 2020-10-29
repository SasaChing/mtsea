"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(time) {
  var date = new Date(time * 1000);
  return date.toLocaleDateString();
}