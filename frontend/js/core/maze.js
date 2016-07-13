"use strict";

var PAC = PAC || {};

PAC.Maze = function () {
  this.grid = PAC.MAZE;
};

PAC.Maze.prototype.willCollide = function (characher) {
  var newX = characher.x + characher.movement.x;
  var newY = characher.y + characher.movement.y;

  if (this.grid[newY][newX] === -1) {
    return true;
  }

  return false;
};

PAC.Maze.prototype.setCharacterDirections = function (characher) {
  var gridPos = PAC.Utils.pointToGrid(characher.x, characher.y);

  characher.directions[PAC.LEFT] = this.grid[gridPos.y][gridPos.x - 1];
  characher.directions[PAC.RIGHT] = this.grid[gridPos.y][gridPos.x + 1];
  characher.directions[PAC.UP] = this.grid[gridPos.y - 1][gridPos.x];
  characher.directions[PAC.DOWN] = this.grid[gridPos.y + 1][gridPos.x];
};

PAC.Maze.prototype.hasFood = function (x, y) {
  var gridPos = PAC.Utils.pointToGrid(x, y);

  if (this.grid[gridPos.y][gridPos.x] === 1) {
    return true;
  }
};

PAC.Maze.prototype.eatFood = function (x, y) {
  var gridPos = PAC.Utils.pointToGrid(x, y);
  this.grid[gridPos.y][gridPos.x] = 0;
};