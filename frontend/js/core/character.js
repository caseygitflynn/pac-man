"use strict";

var PAC = PAC || {};

PAC.Core = PAC.Core || {};

PAC.Core.Character = function (x, y, sprite) {
  this.x = x
  this.y = y
  this.sprite = sprite;
  this.movement = PAC.NONE;
  this.turn = PAC.NONE;
  this.directions = [];
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
  if (this.directions[movement] === -1) {
    return;
  }

  this.movement = movement;
};

PAC.Core.Character.prototype.update = function () {

  switch (this.movement) {
    case PAC.LEFT :
      this.x -= 1;
      break;
    case PAC.RIGHT : 
      this.x += 1;
      break;
    case PAC.UP :
      this.y -= 1;
      break;
    case PAC.DOWN :
      this.y += 1;
      break;
    default :
      break;
  }
};