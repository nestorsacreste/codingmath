window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

      centerX = width / 2,
      centerY = height / 2,
      xRadius = 400,
      yRadius = 400,
      xAngle = 0,
      yAngle = 0,
      xSpeed = .1,
      ySpeed = .131,
      x = 0,
      y = 0;

      render();

      function render() {
        context.clearRect(0, 0, width, height);
        x = centerX + xRadius * Math.cos(xAngle);
        y = centerY + yRadius * Math.sin(yAngle);
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        xAngle += xSpeed;
        yAngle += ySpeed;
        requestAnimationFrame(render);
      }
};
