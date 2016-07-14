"use strict";

var PAC = PAC || {};

PAC.Core = PAC.Core || {};

PAC.Core.Input = function () {
  this.currentInput = PAC.NONE;

  this._initListeners();
};

PAC.Core.Input.prototype._initListeners = function () {
  window.addEventListener('keydown', this._handleKeyPress.bind(this), false);
};

PAC.Core.Input.prototype._handleKeyPress = function (e) {
  var keyCode = e.keyCode;

  for (var key in PAC.KEYS) {
    if (PAC.KEYS.hasOwnProperty(key)) {
      if (keyCode == PAC.KEYS[key]) {
        switch (key) {
          case "UP" :
            this.currentInput = PAC.UP;
            break;
          case "DOWN" :
            this.currentInput = PAC.DOWN;
            break;
          case "LEFT" :
            this.currentInput = PAC.LEFT;
            break;
          case "RIGHT" :
            this.currentInput = PAC.RIGHT;
            break;
          default :
            break;
        }
      }
    }
  }
};