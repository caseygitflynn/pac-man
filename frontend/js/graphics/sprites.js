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
      this.ctx.translate(sprite.x - (sprite.width / 2), sprite.y - (sprite.height / 2));
    } else {
      this.ctx.translate(sprite.x, sprite.y);
    }
    
    this.ctx.drawImage(this.spriteImage, sprite.clipX * 8, sprite.clipY * 8, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
  }
  this.ctx.restore();
};

PAC.Graphics.Sprites.prototype.drawFood = function (maze) {
  for (var y = 0; y < maze.grid.length; y = y + 1) {
    for (var x = 0; x < maze.grid[0].length; x = x + 1) {
      if (maze.grid[y][x] === 1) {
        this._drawFoodPellet(x, y);
      } else if (maze.grid[y][x] === 2) {
        this._drawPowerPellet(x, y);
      }
    }
  }
};

PAC.Graphics.Sprites.prototype._drawFoodPellet = function (x, y) {
  this.ctx.save();
  {
    this.ctx.translate((8 * x) + 3, (8 * y) + 3);
    this.ctx.fillStyle = "#fab9b0";
    this.ctx.fillRect(0, 0, 2, 2);
  }
  this.ctx.restore();
};

PAC.Graphics.Sprites.prototype._drawPowerPellet = function (x, y) {
  this.ctx.save();
  {
    this.ctx.translate((8 * x), (8 * y));
    this.ctx.beginPath();
    this.ctx.arc(4, 4, 4, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "#fab9b0";
    this.ctx.fill();
  }
  this.ctx.restore();
};