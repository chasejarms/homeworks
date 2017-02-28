/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__ (1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(3);
const MovingObject = __webpack_require__(2);

const Asteroid = function(options) {
  options.color = "grey";
  options.radius = options.radius || 10;
  options.vel = this.randomVec(5);

  MovingObject.call(this, options);
};



Util.inherits(Asteroid, MovingObject);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const MovingObject = function(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};

// MovingObject.prototype.move = function() {
//   this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
// };

// MovingObject.prototype.isCollidedWith = function(otherMovingObject) {
//
// };

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    this.color,
    0,
    2*Math.PI
  );

  ctx.fill();
};

module.exports = MovingObject;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Util = {
  inherits (child, parent) {
    let Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  },

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
  // Scale the length of a vector by the given amount.

};

module.exports = Util;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(0);

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


/***/ })
/******/ ]);