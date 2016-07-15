"use strict";

(function () {
  var canvas = document.querySelector('.pac-man');
  var ctx = canvas.getContext('2d');
  var sprites = null;
  var frame = 0;

  var spriteRenderer = null;

  var maze = new PAC.Maze();
  var input = new PAC.Core.Input();

  var characters = [];
  var pacMan = new PAC.Core.Character(12, 12, PAC.SPRITES.PAC_MAN.CLOSED);
  characters.push(pacMan);

  var blinky = new PAC.Core.Character(112, 92, PAC.SPRITES.BLINKY.LEFT);
  var inky = new PAC.Core.Character(120, 120, PAC.SPRITES.INKY.UP);
  var pinky = new PAC.Core.Character(120, 120, PAC.SPRITES.PINKY.DOWN);
  var clyde = new PAC.Core.Character(120, 120, PAC.SPRITES.CLYDE.UP);

  var loop = function () {
    window.requestAnimationFrame(loop);
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    spriteRenderer.draw(PAC.SPRITES.MAP, false);

    for (var steps = 0; steps < 2; steps++) {
      pacMan.update(steps);
    }

    if (pacMan.centerOffset.x == 0 && pacMan.centerOffset.y == 0 && pacMan.directions[pacMan.direction] === -1) {
      pacMan.stopped = true;
    }
    
    pacMan.setMovement(input.currentInput);
    maze.setCharacterDirections(pacMan);
    pacMan.setCurrentSprite(pacMan.frame);

    pacMan.frame++;

    if (pacMan.frame > 15) {
      pacMan.frame = 0;
    }
    
    // if (PAC.Utils.isAtGridOrigin(blinky.x, blinky.y)) {
    //   blinky.setMovement(maze.getValidDirection(blinky));
    // }

    // blinky.update();
    // maze.setCharacterDirections(blinky);

    spriteRenderer.draw(pacMan.getDrawableSprite());
    // spriteRenderer.draw(blinky.getDrawableSprite());
    // spriteRenderer.draw(inky.getDrawableSprite());
    // spriteRenderer.draw(pinky.getDrawableSprite());
    // spriteRenderer.draw(clyde.getDrawableSprite());

    if (maze.hasFood(pacMan.tile)) {
      maze.eatFood(pacMan.tile);
    }

    spriteRenderer.drawFood(maze);
  };

  var spriteImage = new Image();
  spriteImage.addEventListener('load', function () {
    spriteRenderer = new PAC.Graphics.Sprites(spriteImage, ctx, 680, 248);
    loop();
  });
  spriteImage.src = "img/sprites.png";

}());