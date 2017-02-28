const Game = require('./game.js');

const canvasEl = document.getElementsByTagName("canvas")[0];
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;

const GameView = function(canvas) {
  this.game = new Game();
  this.ctx = canvas;
};

GameView.prototype.start = function() {
  let that = this;
  setInterval(function() {
    that.game.moveObjects; //dont work yet
    that.game.draw;
  }, 20);
};

let gameView = new GameView(canvasEl);
gameView.start();
window.GameView = new GameView(canvasEl);
window.canvasEl = canvasEl;
