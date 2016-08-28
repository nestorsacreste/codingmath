window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

  var centerY = height * .5,
      centerX = width * .5,
      baseRadius = 100,
      baseAlpha = 0.5,
      alphaOffset = 0.5,
      radiusOffset = 50,
      yOffset = height * 0.4,
      xOffset = width * 0.4,
      speed = 0.1,
      angle = 0
      xAngle = 0,
      xSpeed = 0.2;

  render();

  function render() {
    var radius = baseRadius + Math.sin(angle) * radiusOffset;
    var y = centerY + Math.sin(angle) * yOffset;
    var x = centerX + Math.sin(xAngle) * xOffset;
    var alpha = baseAlpha + Math.sin(angle) * alphaOffset;
    context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;
    xAngle += xSpeed;
    requestAnimationFrame(render);
  }

};
