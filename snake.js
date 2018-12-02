var ROWS = 50, COLS = 50;
var snake = [];
var SNAKE_INITIAL_LENGTH = 5;
var speed = {
  x: 1,
  y: 0
}
var GAME_SPEED = 100;

function init() {
  for (var i = 0; i < SNAKE_INITIAL_LENGTH; i++) {
    snake.push({
      x: Math.floor(COLS / 2) - i,
      y: Math.floor(ROWS / 2)
    });
  }
}

function integrate() {
  var head = snake[0];
  var dx = speed.x,
      dy = speed.y;
  var newPosition = {
    x: head.x + dx,
    y: head.y + dy
  }
  snake.unshift(newPosition);
  snake.pop();

  setTimeout(integrate, GAME_SPEED);
}

init();
integrate();
