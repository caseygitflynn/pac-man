"use strict";

var PAC = PAC || {};

PAC.Core = PAC.Core || {};

PAC.Core.Character = function (x, y, sprite) {
  this.x = x;
  this.y = y;
  this.offsetX = 0;
  this.offsetY = 0;
  this.sprite = sprite;
  this.movement = {
    x : 0,
    y : 0,
  }
};

PAC.Core.Character.prototype.getDrawableSprite = function () {
  return {
    x : this.x,
    y : this.y,
    offsetX : this.offsetX,
    offsetY : this.offsetY,
    clipX : this.sprite.clipX,
    clipY : this.sprite.clipY,
    width : this.sprite.width || 16,
    height : this.sprite.height || 16
  };
};

PAC.Core.Character.prototype.setMovement = function (x, y) {
  this.movement.x = x;
  this.movement.y = y;
};

PAC.Core.Character.prototype.move = function () {
  this.offsetX += this.movement.x;
  this.offsetY += this.movement.y;

  if (this.offsetX < -3) {
    this.x--;
    this.offsetX = 4;
  }
  if (this.offsetX > 4) {
    this.x++;
    this.offsetX = -3;
  }
  if (this.offsetY < -3) {
    this.y--;
    this.offsetY = 4;
  }
  if (this.offsetY > 4) {
    this.y++;
    this.offsetY = -3;
  }
};