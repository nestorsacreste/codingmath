window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

  for(var i = 0; i < 100; i+= 1) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    var r = Math.round(Math.random() * 255),
        g = Math.round(Math.random() * 255),
        b = Math.round(Math.random() * 255);
    context.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")" ;
    context.stroke();
  }
};
