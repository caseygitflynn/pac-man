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
  this.frame = 0;
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
  this.frame++;

  if (this.frame > 16) {
    this.frame = 0;
  }
  
  this.setCurrentSprite(this.frame);

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

PAC.Core.Character.prototype.setCurrentSprite = function (frame) {
  if (this.movement == PAC.LEFT) {
    if (frame % 16 < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_LEFT;
    } else if  (frame % 16 < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    } else if (frame % 16 < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    }
  }
  if (this.movement == PAC.RIGHT) {
    if (frame % 16 < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_RIGHT;
    } else if  (frame % 16 < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_RIGHT;
    } else if (frame % 16 < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_RIGHT;
    }
  }
  if (this.movement == PAC.UP) {
    if (frame % 16 < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_UP;
    } else if  (frame % 16 < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_UP;
    } else if (frame % 16 < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_UP;
    }
  }
  if (this.movement == PAC.DOWN) {
    if (frame % 16 < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_DOWN;
    } else if  (frame % 16 < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_DOWN;
    } else if (frame % 16 < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_DOWN;
    }
  }
};