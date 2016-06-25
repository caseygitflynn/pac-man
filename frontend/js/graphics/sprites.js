"use strict";

var PAC = PAC || {};

PAC.Graphics = PAC.Graphics || {};

PAC.Graphics.Sprites = function (spriteImage, ctx, width, height) {
  this.spriteImage = spriteImage;
  this.ctx = ctx;
  this.width = width;
  this.heght = height;
};

PAC.Graphics.Sprites.prototype.draw = function (sprite, centered) {
  if (centered === undefined) {
    centered = true;
  }

  this.ctx.save();
  {
    if (centered) {
      this.ctx.translate((sprite.x * 8) - (sprite.width / 2 - 4) + sprite.offsetX, (sprite.y * 8) - (sprite.height / 2 - 4) + sprite.offsetY);
    } else {
      this.ctx.translate((sprite.x * 8) + sprite.offsetX, (sprite.y * 8) + sprite.offsetY);
    }
    this.ctx.drawImage(this.spriteImage, sprite.clipX * 8, sprite.clipY * 8, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
  }
  this.ctx.restore();
};