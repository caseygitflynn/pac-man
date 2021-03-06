"use strict";

var PAC = PAC || {};

PAC.Utils = PAC.Utils || {};

PAC.Utils.pixelToTile = function (pixel) {
  return {
    x : Math.floor(pixel.x / 8),
    y : Math.floor(pixel.y / 8)
  };
};

PAC.Utils.tileToPixel = function (tile) {
  return {
    x : tile.x * 8,
    y : tile.y * 8
  };
};

PAC.Utils.gridToCenterPoint = function (x, y) {
  return {
    x : x + 4,
    y : y + 4
  };
};

PAC.Utils.tilePixel = function(pixel,tilePixel) {
    var tilePixel = {};
    tilePixel.x = pixel.x % 8;
    tilePixel.y = pixel.y % 8;
    
    if (tilePixel.x < 0) {
        tilePixel.x += 8;
    }
    if (tilePixel.y < 0) {
        tilePixel.y += 8;
    }

    return tilePixel;
};

PAC.Utils.centerOffset = function (tilePixel) {
  return {
    x : 4 - tilePixel.x,
    y : 4 - tilePixel.y
  };
};

PAC.Utils.sign = function (x) {
  if (x < 0) {
    return -1;
  }
  if (x > 0) {
    return 1;
  }
  
  return 0;
};

PAC.Utils.vectorFromDirection = function (direction) {
  var vector = {
    x : 0,
    y : 0
  };

  if (direction == PAC.UP) { vector.x = 0; vector.y = -1; }
  if (direction == PAC.DOWN) { vector.x = 0; vector.y = 1; }
  if (direction == PAC.LEFT) { vector.x = -1; vector.y = 0; }
  if (direction == PAC.RIGHT) { vector.x = 1; vector.y = 0; }

  return vector;
};