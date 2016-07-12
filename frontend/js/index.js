"use strict";

(function () {
  var canvas = document.querySelector('.pac-man');
  var ctx = canvas.getContext('2d');
  var sprites = null;
  var frame = 0;

  var spriteRenderer = null;

  var spriteImage = new Image();
  spriteImage.addEventListener('load', function () {
    spriteRenderer = new PAC.Graphics.Sprites(spriteImage, ctx, 680, 248);
  });

  var maze = new PAC.Maze();

  var map = {
    x : 0,
    y : 0,
    offsetX : 0,
    offsetY : 0,
    clipX : 28.5,
    clipY : 0,
    width : 224,
    height : 248
  };

  var pacMan = new PAC.Core.Character(12, 12, PAC.SPRITES.PAC_MAN.CLOSED);

  window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 38 :
        e.preventDefault();
        pacMan.setMovement(PAC.UP);
        break;
      case 39 :
        e.preventDefault();
        pacMan.setMovement(PAC.RIGHT);
        break;
      case 40 :
        e.preventDefault();
        pacMan.setMovement(PAC.DOWN);
        break;
      case 37 :
        e.preventDefault();
        pacMan.setMovement(PAC.LEFT);
        break;
      default :
        break;
    }
  }, false);

  var blinky = new PAC.Core.Character(112, 92, PAC.SPRITES.BLINKY.LEFT);
  blinky.setMovement(PAC.LEFT);

  var inky = new PAC.Core.Character(120, 120, PAC.SPRITES.INKY.UP);
  var pinky = new PAC.Core.Character(120, 120, PAC.SPRITES.PINKY.DOWN);
  var clyde = new PAC.Core.Character(120, 120, PAC.SPRITES.CLYDE.UP);

  spriteImage.src = "img/sprites.png";

  var loop = function () {
    window.requestAnimationFrame(loop);

    frame++;

    if (frame % 16 < 8) {
      blinky.sprite = PAC.SPRITES.BLINKY.LEFT_ALT;
    } else {
      blinky.sprite = PAC.SPRITES.BLINKY.LEFT;
    }

    if (frame % 16 < 4) {
      pacMan.sprite = PAC.SPRITES.PAC_MAN.OPEN_LEFT;
    } else if  (frame % 16 < 8) {
      pacMan.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    } else if (frame % 16 < 12) {
      pacMan.sprite = PAC.SPRITES.PAC_MAN.CLOSED;
    } else {
      pacMan.sprite = PAC.SPRITES.PAC_MAN.HALF_OPEN_LEFT;
    }
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (spriteRenderer) {

      spriteRenderer.draw(map, false);
      var nextGrid = pacMan.nextGrid();
      if (maze.grid[nextGrid.y][nextGrid.x] === -1) {
        pacMan.setMovement(PAC.NONE);
      }
      pacMan.move();
      
      var nextGrid = blinky.nextGrid();
      if (maze.grid[nextGrid.y][nextGrid.x] === -1) {
        blinky.setMovement(PAC.NONE);
      }
      blinky.move();

      spriteRenderer.draw(pacMan.getDrawableSprite());
      spriteRenderer.draw(blinky.getDrawableSprite());
      spriteRenderer.draw(inky.getDrawableSprite());
      spriteRenderer.draw(pinky.getDrawableSprite());
      spriteRenderer.draw(clyde.getDrawableSprite());

      if (maze.hasFood(pacMan.x, pacMan.y)) {
        maze.eatFood(pacMan.x, pacMan.y);
      }
    }

    for (var y = 0; y < maze.grid.length; y = y + 1) {
      for (var x = 0; x < maze.grid[0].length; x = x + 1) {
        if (maze.grid[y][x] === 1) {
          ctx.save();
          {
            ctx.translate((8 * x) + 3, (8 * y) + 3);
            ctx.fillStyle = "#fab9b0";
            ctx.fillRect(0, 0, 2, 2);
          }
          ctx.restore();
        } else if (maze.grid[y][x] === 2) {
          ctx.save();
          {
            ctx.translate((8 * x), (8 * y));
            ctx.beginPath();
            ctx.arc(4, 4, 4, 0, 2 * Math.PI, false);
            ctx.fillStyle = "#fab9b0";
            ctx.fill();
          }
          ctx.restore();
        }
      }
    }

    ctx.save();
    {
      ctx.translate(pacMan.x, pacMan.y);
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 1, 1);
    }
    ctx.restore();
  };

  loop();

}());