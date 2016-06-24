"use strict";

(function () {
  var canvas = document.querySelector('.pac-man');
  var ctx = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 100;
  var frames = 0;
  var opening = false;
  var direction = 270;

  window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 38 :
        direction = 270;
        break;
      case 39 : 
        direction = 0;
        break;
      case 40 : 
        direction = 90;
        break;
      case 37 :
        direction = 180;
        break;
      default :
        break;
    }
  }, false);

  var loop = function () {
    window.requestAnimationFrame(loop);

    if (opening) {
      frames--;
    } else {
      frames++;
    }
    
    if (frames >= 9) {
      opening = true;
    }

    if (frames <= 0) {
      opening = false;
    }

    var angle = (frames * 5);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    {
      ctx.translate(centerX, centerY);
      ctx.rotate(direction * (Math.PI / 180));
      ctx.rotate(-(angle) * (Math.PI / 180));
      ctx.beginPath();
      ctx.arc(0, 0, 25, 0.25 * Math.PI, 1.25 * Math.PI, false);
      ctx.fillStyle = "rgb(255, 255, 0)";
      ctx.fill();
    }
    ctx.restore();

    ctx.save();
    {
      ctx.translate(centerX, centerY);
      ctx.rotate(direction * (Math.PI / 180));
      ctx.rotate(angle * (Math.PI / 180));
      ctx.beginPath();
      ctx.arc(0, 0, 25, 0.75 * Math.PI, 1.75 * Math.PI, false);
      ctx.fillStyle = "rgb(255, 255, 0)";
      ctx.fill();
    }
    ctx.restore();

    
  };

  loop();

}());