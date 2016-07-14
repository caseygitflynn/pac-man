"use strict";

var PAC = PAC || {};

PAC.Maze = function () {
  this.grid = PAC.MAZE;
};

PAC.Maze.prototype.setCharacterDirections = function (character) {
  var gridPos = PAC.Utils.pixelToTile(character.pixel);

  character.directions[PAC.LEFT] = this.grid[gridPos.y][gridPos.x - 1];
  character.directions[PAC.RIGHT] = this.grid[gridPos.y][gridPos.x + 1];
  character.directions[PAC.UP] = this.grid[gridPos.y - 1][gridPos.x];
  character.directions[PAC.DOWN] = this.grid[gridPos.y + 1][gridPos.x];
};

PAC.Maze.prototype.getValidDirection = function (character) {

  if (character.movement !== PAC.LEFT && character.movement !== PAC.RIGHT && character.directions[PAC.LEFT] !== -1) {
    return PAC.LEFT;
  }
  if (character.movement !== PAC.RIGHT && character.movement !== PAC.LEFT && character.directions[PAC.RIGHT] !== -1) {
    return PAC.RIGHT;
  }
  if (character.movement !== PAC.UP && character.movement !== PAC.DOWN && character.directions[PAC.UP] !== -1) {
    return PAC.UP;
  }
  if (character.movement !== PAC.DOWN && character.movement !== PAC.UP && character.directions[PAC.DOWN] !== -1) {
    return PAC.DOWN;
  }

  return character.movement;
};

PAC.Maze.prototype.hasFood = function (tile) {
  if (this.grid[tile.y][tile.x] === 1) {
    return true;
  }

  return false;
};

PAC.Maze.prototype.eatFood = function (tile) {
  this.grid[tile.y][tile.x] = 0;
};