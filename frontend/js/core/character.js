"use strict";

var PAC = PAC || {};

PAC.Core = PAC.Core || {};

PAC.Core.NONE = 1;
PAC.Core.UP = 1; 
PAC.Core.RIGHT = 1;
PAC.Core.DOWN = 1;
PAC.Core.LEFT = 1;

PAC.Core.Character = function (x, y, sprite) {
  this.x = x
  this.y = y
  this.sprite = sprite;
  this.movement = PAC.NONE;
};

PAC.Core.Character.prototype.getDrawableSprite = function () {
  return {
    x : this.x,
    y : this.y,
    clipX : this.sprite.clipX,
    clipY : this.sprite.clipY,
    width : this.sprite.width || 16,
    height : this.sprite.height || 16
  };
};

PAC.Core.Character.prototype.setMovement = function (movement) {
  this.movement = movement;
};

PAC.Core.Character.prototype.move = function () {
  switch (this.movement) {
    case PAC.RIGHT :
      this.x += 1;
      break;
    case PAC.DOWN : 
      this.y += 1;
      break;
    case PAC.LEFT :
      this.x -= 1;
      break;
    case PAC.UP :
      this.y -= 1;
      break;
    default :
      break;
  }
};

PAC.Core.Character.prototype.nextGrid = function () {
  var gridPos = PAC.Utils.pointToGrid(this.x, this.y);

  switch (this.movement) {
    case PAC.RIGHT :
      gridPos.x += 1;
      break;
    case PAC.DOWN : 
      gridPos.y += 1;
      break;
    case PAC.LEFT :
      gridPos.x -= 1;
      break;
    case PAC.UP :
      gridPos.y -= 1;
      break;
    default :
      break;
  }

  return gridPos;
};