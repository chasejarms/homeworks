const Asteroid = require ("./asteroid.js");

const Game = function() {
  let NUM_ASTEROIDS = 10;
  this.dimX = 800;
  this.dimY = 500;
  this.asteroids = [];
  this.addAsteroids();
};

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition}));
  }
};

Game.prototype.randomPosition = function() {
  let randomX = Math.random() * this.dimX;
  let randomY = Math.random() * this.dimY;
  return [randomX, randomY];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  for (let i = 0; i < this.asteroids.length; i++) {
    let asteroid = this.asteroids[i];
    asteroid.draw(ctx);
  }
};

// Game.prototype.moveObjects = function(ctx) {
//   for (let i = 0; i < this.asteroids.length; i++) {
//     let asteroid = this.asteroids[i];
//     asteroid.move(ctx);
//   }
// };
module.exports = Game;
