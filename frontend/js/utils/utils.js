"use strict";

var PAC = PAC || {};

PAC.Utils = PAC.Utils || {};

PAC.Utils.pointToGrid = function (x, y) {
  return {
    x : Math.floor(x / 8),
    y : Math.floor(y / 8)
  };
};

PAC.Utils.gridToPoint = function (x, y) {
  return {
    x : x * 8,
    y : y * 8
  };
};