"use strict";

var PAC = PAC || {};

PAC.Core = PAC.Core || {};

PAC.Core.Character = function (x, y, sprite) {
  this.pixel = {
    x : x,
    y : y
  };
  this.tile = PAC.Utils.pixelToTile(this.pixel);
  this.tilePixel = PAC.Utils.tilePixel(this.pixel);
  this.direction = PAC.NONE;
  this.vector = PAC.Utils.vectorFromDirection(this.direction);
  this.sprite = sprite;
  this.directions = [];
  this.centerOffset = PAC.Utils.centerOffset(this.tilePixel);
  this.frame = 0;
  this.steps =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  this.stopped = true;
};

PAC.Core.Character.prototype.getDrawableSprite = function () {
  return {
    x : this.pixel.x,
    y : this.pixel.y,
    clipX : this.sprite.clipX,
    clipY : this.sprite.clipY,
    width : this.sprite.width || 16,
    height : this.sprite.height || 16
  };
};

PAC.Core.Character.prototype.setMovement = function (direction) {
  if (this.directions[direction] === -1) {
    return;
  }
  
  this.stopped = false;
  this.direction = direction;
  this.vector = PAC.Utils.vectorFromDirection(this.direction);
};

PAC.Core.Character.prototype.getNumSteps = function () {
  return this.steps[this.frame];
};

PAC.Core.Character.prototype.updatePositionVariables = function () {
  this.tile = PAC.Utils.pixelToTile(this.pixel);
  this.tilePixel = PAC.Utils.tilePixel(this.pixel);
  this.centerOffset = PAC.Utils.centerOffset(this.tilePixel);
};

PAC.Core.Character.prototype.step = function () {
  if (!this.stopped) {
    this.pixel.x += this.vector.x;
    this.pixel.y += this.vector.y;
  }

  this.updatePositionVariables();
};

PAC.Core.Character.prototype.update = function (step) {
  if (step >= this.getNumSteps()) {
    return;
  }

  this.step();
};

PAC.Core.Character.prototype.setCurrentSprite = function (frame) {
  if (this.direction == PAC.LEFT) {
    if (frame < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_LEFT;
    } else if  (frame < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    } else if (frame < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    }
  }
  if (this.direction == PAC.RIGHT) {
    if (frame < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_RIGHT;
    } else if  (frame < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_RIGHT;
    } else if (frame < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_RIGHT;
    }
  }
  if (this.direction == PAC.UP) {
    if (frame < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_UP;
    } else if  (frame < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_UP;
    } else if (frame < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_UP;
    }
  }
  if (this.direction == PAC.DOWN) {
    if (frame < 4) {
      this.sprite = PAC.SPRITES.PAC_MAN.OPEN_DOWN;
    } else if  (frame < 8) {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_DOWN;
    } else if (frame < 12) {
      this.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      this.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_DOWN;
    }
  }
};