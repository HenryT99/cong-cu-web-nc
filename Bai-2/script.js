var ballWidth = $("#ball").width();
var ballHeight = $("#ball").height();

var dx = 10;
var dy = 10;

$(document).ready(function () {
  setInterval(() => {
    play();
  }, 100);
});

function play() {
  var ballLeft = parseInt($("#ball").css("left"));
  var ballTop = parseInt($("#ball").css("top"));

  var width = $("#container").width();
  var height = $("#container").height();

  if (ballLeft < 0 || ballLeft + ballWidth >= width) dx = -dx;
  if (ballTop < 0 || ballTop + ballHeight >= height) dy = -dy;
  $("#ball").css("left", `${ballLeft + dx}px`);
  $("#ball").css("top", `${ballTop + dy}px`);
}
